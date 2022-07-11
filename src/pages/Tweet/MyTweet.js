import React, { useState, useEffect, useContext } from 'react'
import TweetCard from '../../components/TweetCard';
import tweet from '../../services/tweet.api'
import {LoginContext} from "../../Context/LoginContext" 

const MyTweet = ({selectTweet, refresh}) => {
    const [tweets, setTweets] = useState([])
    const { user } = useContext(LoginContext)
    const [isdeleted, setDeleted] = useState(false)

    const deleted = ()=>{
        setDeleted(!isdeleted)
    }
    
    useEffect(() => {
      if (user) {
        tweet
          .getTweetByUser()
          .then((res) => {
            setTweets(res.data)
            // console.log(res);
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }, [user, refresh, isdeleted])

    
  
  return (
    <div className="grid w-full grid-cols-2 gap-2 pl-4 lg:grid-cols-4">
    {tweets?.map((item, i) => {
      return <TweetCard tweet={item} key={i} isEdit={true} selectTweet={selectTweet} deleted={deleted} />
    })}
  </div>
  )
}

export default MyTweet;
