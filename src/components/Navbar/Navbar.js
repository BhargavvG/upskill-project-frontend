import React, { useState } from "react";
import ProfileModal from "../Dailog/ProfileModal";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [popup, setPopup] = useState(false);
  const [navItems, setNavItems] = useState([
    { title: "Home", url: "/" },
    { title: "Tweet", url: "/tweet" },
  ]);

  return (
    <>
      <nav className="flex items-center gap-4 p-5 px-8 shadow-lg text-gray-50 bg-slate-700">
        {navItems.map((item, i) => {
          return (
            <Link
              key={i}
              className="font-sans text-base font-medium tracking-wider"
              to={item.url}
            >
              {item.title}
            </Link>
          );
        })}
        <div
          className="absolute text-2xl right-8 "
          onClick={() => {
            console.log("log");
            setPopup(!popup);
          }}
        >
          <BsPersonFill />
        </div>
      </nav>
      <ProfileModal show={popup} />
    </>
  );
}
