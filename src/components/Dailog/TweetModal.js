import React, { useState, useContext, useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { TextInput } from '../Form'
import Alert from '../Alert'
import channel from '../../services/channel.api'
import {LoginContext} from "../../Context/LoginContext"

export default function Modal( {closeModal, modalTitle, buttonText}) {
  const [props, setProps] = useState([
    {
      type: 'text',
      name: 'msg',
      title: 'Message',
      path: '',
      error: '',
      placeholder: 'Type Your msg..',
      value: '',
    }
  ])
  const [channels, setChannels] = useState([])
  const [allChannels, setAllChannels] = useState([])
  const {user } = useContext(LoginContext)
  const [fieldData, setFieldData] = useState({})
  const [errors, setErrors] = useState({})
  const [alert, setAlert] = useState({ show: false })

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }

  const addTweet =()=>{
    
  }
  useEffect(()=>{
    channel.getAllChannels().then((res)=>{
      setAllChannels(res.data)
    })
  },[])

  useEffect(()=>{
    
    if(user.channels){
      let ch = allChannels.filter((x)=> user.channels.includes(x.id) )
      setChannels(ch)
    }
  },[user,allChannels])

  // handle changes of field inputs.
  const handleChange = (e, path, key) => {
    let fields = { ...fieldData }
    // console.log(e, "event");
    // console.log(path, "path");
    if (path === '' || path === undefined) {
      fields[e.target.name] = e.target.value
    } else {
      fields[path][e.target.name] = e.target.value
    }
    // console.log(fields);
    setFieldData(fields)
  }

  const handleChannelChange = (i, e)=>{
    let fields = fieldData
    if(!fields.channels){
      fields.channels=[];
    }
    if(e.target.checked){
      fields.channels.push(channels[i].id)
    }
    console.log(fieldData)
  }

  return (
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-between p-3">
            <span>{modalTitle || ' '}</span>
            <span onClick={closeModal}>
              <VscChromeClose></VscChromeClose>
            </span>
          </div>
          <div className="w-full px-5 pb-5 mx-auto bg-white rounded-xl">
            {props?.map((item, i) => {
              return (
                <TextInput
                  {...item}
                  path={item.path}
                  key={i}
                  handleChange={handleChange}
                  index={i}
                  error={errors[item?.name]}
                />
              )
            })}

            <div className="w-full px-5 pb-5 mx-auto bg-white rounded-xl">
              <h2>Select Channels</h2>
              <div className="flex flex-wrap items-center justify-start gap-3 my-2"> {channels.map((item, i)=>{
                return <>
                <input type="checkbox" name={i} className="" value={item.id} onChange={(e)=>handleChannelChange(i, e)}></input>
                <label className="" for={i}>{item.name}</label></>
              })}</div>
            </div>

            <button
              className="w-full p-2 px-6 mx-auto mt-4 text-lg font-medium text-center text-white rounded-lg shadow-lg bg-slate-700 hover:bg-slate-600 btn"
              onClick={addTweet}
            >
              {' '}
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
