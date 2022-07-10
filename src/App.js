import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tweet from "./pages/Tweet";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Navbar from "./components/Navbar";
import { LoginContext } from "./Context/LoginContext";
import Loading from "./components/Loading";
import Home from "./pages/Home"

function App() {
  const { loggedIn, loading, user } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !loggedIn) {
      navigate("/login");
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/tweet/*" element={<Tweet />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/test" element={<Test />}></Route>
        </Routes>
      </>
    );
}

export default App;
