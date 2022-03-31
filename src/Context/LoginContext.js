import { createContext, useState, useEffect } from "react";
// import userObj from "../Services/UserServices";
export const LoginContext = createContext();

export const LoginState = (props) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const verifyUser = () => {
    if (localStorage.token) {
      //   userObj.getProfile().then((res) => {
      //     setUser(res.data);
      //     setLoggedIn(true);
      //     setLoading(false);
      //   });
    } else {
      setLoading(false);
    }
  };
  const updateUser = (user) => {
    setUser(user);
    // userObj
    //   .updateUser(user)
    //   .then((res) => {})
    //   .catch((err) => {});
  };

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <LoginContext.Provider
      value={{ loggedIn, user, loading, verifyUser, updateUser }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
