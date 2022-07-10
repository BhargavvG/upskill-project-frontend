import React, { useState, useContext, useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc'

export default function ConfirmModal({ closeModal, modalTitle, children }) {

  return (
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div class="relative inline-block align-bottom w-full px-5 pb-5 mx-auto bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-between p-3">
            <span className="">{modalTitle || ' '}</span>
            <span onClick={closeModal}>
              <VscChromeClose></VscChromeClose>
            </span>
          </div>
            {children}
        </div>
      </div>
    </div>
  )
}
