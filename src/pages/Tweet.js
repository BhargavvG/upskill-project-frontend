import React, { useState, useEffect, useContext } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import TweetCard from '../components/TweetCard/TweetCard'
import tweet from '../services/tweet.api'
import channel from '../services/channel.api'
import { LoginContext } from '../Context/LoginContext'
import { GrAdd } from 'react-icons/gr'
import { TweetModal } from '../components/Dailog'

export default function TweetPage() {
  let defaultChannel = {
    _id: '6267cd3edb4980059dd8820e',
    name: 'public',
    createdOn: '2022-04-26T10:40:35.663Z',
    id: 1100,
    __v: 0,
    url: './public',
  }
  const [selectedChannel, setSelectedChannel] = useState(defaultChannel)
  const [tweets, setTweets] = useState([])
  const { user } = useContext(LoginContext)
  const [channels, setChannels] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (user) {
      channel
        .getChannel({ subscribedChannels: user.channels || [1100] })
        .then((res) => {
          setChannels(res.data)
          // console.log(res);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user])

  useEffect(() => {
    if (channels) {
      setSelectedChannel(channels[0])
    }
  }, [channels])

  useEffect(() => {
    if (selectedChannel) {
      tweet
        .getTweetByChannels({ selectedChannels: [selectedChannel.id] })
        .then((res) => {
          console.log(res)
          setTweets(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [selectedChannel])

  const handleChannel = (channel) => {
    setSelectedChannel(channel)
  }

  const closeModal = () => {
    console.log('close')
    setShowModal(false)
  }
  const openModal = () => {
    setShowModal(true)
  }
  return (
    <>
      <Sidebar channels={channels} selectedChannel={selectedChannel} handleChannel={handleChannel} />
      <div className="fixed right-0 grid w-4/5 grid-cols-4 gap-2">
        {tweets?.map((item, i) => {
          return <TweetCard tweet={item} />
        })}
      </div>
      {showModal ? <TweetModal closeModal={closeModal} modalTitle={'Post a Tweet'} showModal={showModal} buttonText={"Add"}>
      </TweetModal> : null}
      <div className="absolute bottom-10 right-10 bg-[#E9DDD2] p-4 flex gap-3 items-center" onClick={openModal}>
        <GrAdd /> <span>New Post</span>
      </div>
    </>
  )
}
