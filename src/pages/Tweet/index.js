import React, { useState, useEffect, useContext } from 'react'
import tweet from '../../services/tweet.api'
import channel from '../../services/channel.api'
import { LoginContext } from '../../Context/LoginContext'
import { GrAdd } from 'react-icons/gr'
import { TweetModal } from '../../components/Dailog'
import {Routes, Route} from 'react-router-dom'
import TweetHomePage from './Tweet.Home'
import MyTweet from './MyTweet'

export default function TweetPage() {
  const { user } = useContext(LoginContext)
  const [showModal, setShowModal] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [selectedTweet, setSelectedTweet] = useState({})

  const selectTweet= (tweet)=>{
    setSelectedTweet(tweet);
    openModal()
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedTweet({})
    setRefresh(!refresh)
  }
  const openModal = () => {
    setShowModal(true)
  }

  useEffect(() =>{
    if(selectedTweet?.id){
      openModal();
    }
  },[selectedTweet])
  return (
    <>
      <Routes>
          <Route exact path="/mytweet" element={<MyTweet selectTweet={selectTweet} refresh={refresh} />}></Route>
          <Route exact path="/*" element={<TweetHomePage refresh={refresh} />}></Route>
        </Routes>
      {showModal ? (
        <TweetModal
          closeModal={closeModal}
          modalTitle={'Post a Tweet'}
          showModal={showModal}
          buttonText={selectedTweet? "Save" :'Add'}
          selectedTweet={selectedTweet}
        ></TweetModal>
      ) : null}
      <div
        className="absolute bottom-10 right-10 bg-[#E9DDD2] p-4 flex gap-3 items-center cursor-pointer select-none"
        onClick={openModal}
      >
        <GrAdd /> <span>New Post</span>
      </div>
    </>
  )
}
