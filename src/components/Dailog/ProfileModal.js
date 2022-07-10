import React, { useState, useContext } from 'react'
import { LoginContext } from '../../Context/LoginContext'
import { useNavigate } from 'react-router-dom'

export default function ProfileModal({ show, closeModal }) {
  const { loggedIn } = useContext(LoginContext)
  const navigate = useNavigate()

  const logout = () => {
    if (loggedIn) {
      localStorage.removeItem('token')
      window.location.reload()
    } else {
      navigate('/login')
    }
  }

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto top-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={show ? {} : { display: 'none' }}
    >
      {/* Modal Backdrop opacity-100 to blur */}
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-0 top-16" aria-hidden="true"></div>
        <div
          className="absolute inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-lg transform transition-all sm:my-8 sm:align-middle  w-60 top-[-2rem] right-4"
          style={show ? {} : { display: 'none' }}
        >
          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div className="flex flex-col text-center gap-y-3">
              <p
                className="font-medium text-gray-500 cursor-pointer hover:text-slate-600"
                onClick={() => {
                  navigate('/tweet/mytweet')
                  closeModal()
                }}
              >
                My Tweets
              </p>
              <button
                className="p-2 font-medium text-white rounded-lg btn bg-slate-700 hover:bg-slate-600"
                onClick={logout}
              >
                {loggedIn ? 'Logout' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
