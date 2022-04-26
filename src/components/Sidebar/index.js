import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import channel from "../../services/channel";

export default function Index({ selectedChannel, handleChannel }) {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    channel.getAllChannels().then((res) => {
      if (res) {
        setChannels(res.data);
      }
    });
  }, []);
  return (
    <div className=" w-1/5 py-6 pl-6 space-x-4 border-r border-gray-200 sidebar bg-[#f0edea] fixed h-full overflow-y-auto overflow-x-hidden">
      <h2 className="p-4 px-10 text-lg font-medium">Channels</h2>
      <div className="flex flex-col items-center">
        {channels.map((item, i) => {
          return (
            <Link
              className="w-full p-4 px-10 py-6 text-center transition ease-in-out delay-200 border-b border-slate-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#e9ddd2] active:bg-[#e9ddd2]"
              key={i}
              to={item.url}
              style={
                selectedChannel === item.id
                  ? { backgroundColor: "#e9ddd2" }
                  : {}
              }
              onClick={() => {
                handleChannel(item.id);
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
