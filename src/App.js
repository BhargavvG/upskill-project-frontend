import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import ProfileModal from "./components/Dailog/ProfileModal";

function App() {
  const [navItems, setNavitems] = useState([
    { title: "Home", url: "/" },
    { title: "Tweet", url: "/tweet" },
  ]);
  return (
    <>
      <nav className="flex gap-4 p-5 px-8 shadow-lg text-gray-50 bg-slate-700">
        {navItems.map((item, i) => {
          return (
            <div
              key={i}
              className="font-sans text-base font-medium tracking-wider"
            >
              {item.title}
            </div>
          );
        })}
      </nav>
      <ProfileModal show={true} />

      <BrowserRouter>
        <Routes>
          <Route exact path="/demo" element={<Demo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
