import React, { useState, useEffect } from "react";
import TextInput from "../components/Form/TextInput";

export default function Login() {
  const [props, setProps] = useState([
    {
      type: "text",
      name: "userId",
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

  const [fieldData, setFieldData] = useState([]);

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

  const handleChange = (e, path, key) => {
    let fields = { ...fieldData };
    console.log(e, "event");
    console.log(path, "path");
    if (path === "" || path === undefined) {
      fields[e.target.name] = e.target.value;
    } else {
      fields[path][e.target.name] = e.target.value;
    }
    console.log(fields);
    setFieldData(fields);
  };

  return (
    <div className="relative">
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
            />
          );
        })}

        <button className="p-2 px-6 mx-auto text-lg font-medium text-center bg-teal-500 rounded-lg shadow-lg btn hover:bg-teal-400">
          {" "}
          Login
        </button>
      </div>
    </div>
  );
}
