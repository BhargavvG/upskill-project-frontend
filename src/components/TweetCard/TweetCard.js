import React, { useEffect, useState, useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { BiBookmarkPlus } from "react-icons/bi";
import { BsBookmarkPlusFill } from "react-icons/bs";
import tweetObj from "../../services/tweet";
import userObj from "../../services/user";
import { LoginContext } from "../../Context/LoginContext";

export default function TweetCard({ tweet }) {
  const [liked, setLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [date, setDate] = useState({});
  const { user, verifyUser } = useContext(LoginContext);

  // date convertion
  useEffect(() => {
    let date = new Date(tweet.createdOn).toDateString();
    date = [date.slice(0, 10), ",", date.slice(10)].join("");
    date = date.slice(4);
    let time = new Date(tweet.createdOn).toLocaleTimeString();
    time = time.slice(0, 5);
    setDate({ date: date, time: time });
  }, [tweet.createdOn]);

  // Likes
  useEffect(() => {
    // check tweet is already liked or not
    if (user && tweet.likes.includes(user.id)) {
      setLiked(true);
    }

    // check tweet is already saved or not
    if (user && user.savedTweets.includes(tweet.id)) {
      setIsSaved(true);
    }

    // Counts likes of tweet
    setLikeCount(tweet.likes.length);
  }, [tweet.likes, user]);

  const like = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else setLikeCount(likeCount + 1);
    setLiked(!liked);

    tweetObj.like(tweet.id).then((res) => {
      console.log(res);
    });
  };

  // Save for Later
  const saveForLater = () => {
    userObj
      .saveForLater({ id: tweet.id })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setIsSaved(!isSaved);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="float-left p-4">
      <div className="max-w-sm px-2 pt-3 mx-auto bg-white shadow-xl rounded-xl ring-1 ring-slate-300">
        <div className="flex flex-row items-center justify-start">
          <div className="h-10 overflow-hidden rounded-full">
            <img
              src="/assets/img/defaultProfile.webp"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col pl-4">
            <div className="font-medium text-black text-md">
              {tweet.user.name}
            </div>
            <div className="text-sm font-light text-slate-700">
              @{tweet.user.userName}
            </div>
          </div>
        </div>
        <div className="pt-4 pb-2 overflow-scroll break-all max-h-32">
          <p className="text-base text-slate-900">{tweet.msg}</p>
          <p className="text-sm text-slate-500">
            {date.time}, {date.date}
          </p>
        </div>
        <div className="border-t border-slate-200"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center mx-auto my-3 text-lg">
            <FiHeart
              style={liked && { fill: "#f95959" }}
              onClick={like}
              className={`${liked ? "like" : "dislike"}`}
            />
            <span className="pl-2 text-sm text-slate-800">
              {likeCount} {likeCount > 1 ? "Likes" : "Like"}
            </span>
          </div>
          <div
            className="flex items-center mx-auto my-3 text-lg cursor-pointer"
            onClick={saveForLater}
          >
            {isSaved ? <BsBookmarkPlusFill /> : <BiBookmarkPlus />}
            <span className="pl-2 text-sm text-slate-800">
              {isSaved ? "Saved" : "Save for Later"}
            </span>
          </div>
        </div>
        {/* <div className="flex flex-row justify-between">
          <div className="flex items-center mx-auto my-3 text-lg">
            <FiHeart
              style={liked && { fill: "#f95959" }}
              onClick={like}
              className={`${liked ? "like" : "dislike"}`}
            />
            <span className="pl-2 text-sm text-slate-800">
              {likeCount} {likeCount > 1 ? "Likes" : "Like"}
            </span>
          </div>
          <div
            className="flex items-center mx-auto my-3 text-lg cursor-pointer"
            onClick={saveForLater}
          >
            {isSaved ? <BsBookmarkPlusFill /> : <BiBookmarkPlus />}
            <span className="pl-2 text-sm text-slate-800">
              {isSaved ? "Saved" : "Save for Later"}
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
