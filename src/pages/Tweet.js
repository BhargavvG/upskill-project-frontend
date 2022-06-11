import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TweetCard from "../components/TweetCard/TweetCard";
import tweet from "../services/tweet.api";
import channel from "../services/channel.api";
import { LoginContext } from "../Context/LoginContext";

export default function TweetPage() {
  let defaultChannel = {
    "_id": "6267cd3edb4980059dd8820e",
    "name": "public",
    "createdOn": "2022-04-26T10:40:35.663Z",
    "id": 1100,
    "__v": 0,
    "url": "./public"
}; 
  const [selectedChannel, setSelectedChannel] = useState(defaultChannel);
  const [tweets, setTweets] = useState([]);
  const { user } = useContext(LoginContext);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    if (user) {
      channel
        .getChannel({ subscribedChannels: user.channels || [1100] })
        .then((res) => {
          setChannels(res.data);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  useEffect(() => {
    if (channels) {
      setSelectedChannel(channels[0]);
    }
  }, [channels]);

  useEffect(() => {
    if(selectedChannel){

      tweet
      .getTweetByChannels({ selectedChannels: [selectedChannel.id] })
      .then((res) => {
        console.log(res);
        setTweets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    }, [selectedChannel]);

  const handleChannel = (channel) => {
    setSelectedChannel(channel);
  };
  return (
    <>
      <Sidebar
        channels={channels}
        selectedChannel={selectedChannel}
        handleChannel={handleChannel}
      />
      <div className="fixed right-0 grid w-4/5 grid-cols-4 gap-2">
        {tweets?.map((item, i) => {
          return <TweetCard tweet={item} />;
        })}
      </div>
    </>
  );
}
