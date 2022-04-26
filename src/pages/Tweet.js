import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TweetCard from "../components/TweetCard/TweetCard";
import tweet from "../services/tweet";

export default function Demo() {
  const [selectedChannel, setSelectedChannel] = useState(0);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    tweet.getAllTweets().then((res) => {
      setTweets(res.data);
    });
  }, []);

  const handleChannel = (channel) => {
    setSelectedChannel(channel);
  };
  return (
    <>
      <Sidebar
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
