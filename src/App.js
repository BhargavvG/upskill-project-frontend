import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Demo from "./pages/Demo";
import ProfileModal from "./components/Dailog/ProfileModal";
import { BsPersonFill } from "react-icons/bs";
import Login from "./pages/Login";

function App() {
  const [navItems, setNavItems] = useState([
    { title: "Home", url: "/" },
    { title: "Tweet", url: "/tweet" },
  ]);
  const [popup, setPopup] = useState(false);

  return (
    <>
      <BrowserRouter>
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
        <Routes>
          <Route exact path="/tweet/*" element={<Demo />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
