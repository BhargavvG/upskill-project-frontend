import React, { useState, useEffect, useContext } from "react";
import TextInput from "../components/Form/TextInput";
import user from "../services/user";
import Alert from "../components/Alert/Alert";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [props, setProps] = useState([
    {
      type: "text",
      name: "id",
      title: "User Id",
      path: "",
      error: "",
      placeholder: "Enter your Id",
      value: "",
    },
    {
      type: "password",
      name: "password",
      title: "Password",
      path: "",
      error: "",
      placeholder: "password",
      value: "",
    },
  ]);
  const { loggedIn, verifyUser } = useContext(LoginContext);
  const [fieldData, setFieldData] = useState({});
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ show: false });

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  // If logged in then navigate back to previous page.
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate(-1);
    }
  }, [loggedIn]);

  // Build fields from props
  const fieldsBuilder = () => {
    let fields = {};
    props.forEach((item) => {
      fields[item.name] = fields[item.value];
    });
    setFieldData(fields);
  };

  useEffect(() => {
    fieldsBuilder();
  }, []);

  // handle changes of field inputs.
  const handleChange = (e, path, key) => {
    let fields = { ...fieldData };
    // console.log(e, "event");
    // console.log(path, "path");
    if (path === "" || path === undefined) {
      fields[e.target.name] = e.target.value;
    } else {
      fields[path][e.target.name] = e.target.value;
    }
    // console.log(fields);
    setFieldData(fields);
  };

  const validation = () => {
    console.log(fieldData.id);
    console.log(fieldData.password);
    if (!fieldData.id) {
      setErrors({ id: "Please Enter Id" });
    } else if (!fieldData.password) {
      setErrors({ password: "Please Enter Password" });
    } else return true;
  };

  const login = () => {
    let valid = validation();
    console.log(valid);
    if (valid) {
      setErrors({});
      user
        .login(fieldData)
        .then((res) => {
          if (res.status === 204) {
            setErrors({ id: "Please Enter valid User Id" });
          } else if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            verifyUser();
            handleAlert({
              type: "success",
              text: "Logged in",
            });
            window.location.reload(false);
          } else if (res.status === 205) {
            setErrors({ password: "Password didn't matched" });
          } else {
            setErrors({ password: "UserName or password didn't matched" });
          }
        })
        .catch((err) => {
          setErrors({
            password: "Something went wrong!",
          });
        });
    }
  };

  return (
    <div className="relative">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className="fixed inset-0 z-[-10] opacity-40 w-full h-full">
        <img
          src="./assets/img/background2.jpg"
          className="w-full h-full "
        ></img>
      </div>
      <div className="w-1/4 p-5 mx-auto mt-20 bg-white border shadow-xl md:p-10 rounded-xl border-slate-300">
        <h1 className="text-xl font-medium text-center">Login</h1>

        {props?.map((item, i) => {
          return (
            <TextInput
              {...item}
              path={item.path}
              key={i}
              handleChange={handleChange}
              index={i}
              error={errors[item?.name]}
            />
          );
        })}
        <button
          className="w-full p-2 px-6 mx-auto mt-4 text-lg font-medium text-center text-white rounded-lg shadow-lg bg-slate-700 hover:bg-slate-600 btn"
          onClick={login}
        >
          {" "}
          Login
        </button>
      </div>
    </div>
  );
}
