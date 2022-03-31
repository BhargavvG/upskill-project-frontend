import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

export default function Demo() {
  return (
    <div className="p-4">
      <div className="max-w-sm px-5 pt-3 mx-auto bg-white shadow-xl rounded-xl ring-1 ring-slate-300">
        <div className="flex flex-row items-center justify-start">
          <div className="h-10 overflow-hidden rounded-full">
            <img
              src="./assets/img/defaultProfile.webp"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col pl-4">
            <div className="font-medium text-black text-md">Name</div>
            <div className="text-sm font-light text-slate-700">@name</div>
          </div>
        </div>
        <div className="pt-4 pb-2 overflow-scroll break-all max-h-32">
          <p className="text-base text-slate-900">Your message here!</p>
          <p className="text-sm text-slate-500">5:03 pm, March 29,2022</p>
        </div>
        <div className="border-t border-slate-200"></div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center mx-auto my-3 text-lg">
            <FiHeart />
            <span className="pl-2 text-sm text-slate-800">20 Likes</span>
          </div>
          <div className="flex items-center mx-auto my-3 text-lg">
            <FaRegComment />
            <span className="pl-2 text-sm text-slate-800">2 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
