import React from "react";
import "./alert.css";
import { RiAlertFill } from "react-icons/ri";
import { MdCloudDone } from "react-icons/md";
const Alert = ({ type, text }) => {
  return (
    <div className="relative">
      <div id="notifyMainDiv" className="notifyMainContainer">
        <div className="w-1/3 notifyContent notifyinfo">
          <div className="flex items-center justify-center notifyText">
            <span className="alert-svg">
              {type == "success" ? (
                <MdCloudDone />
              ) : type == "danger" ? (
                <RiAlertFill />
              ) : null}
            </span>
            <span className="mx-4">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

// Alert component

//  const [alert, setAlert] = useState({ show: false });
// {alert.show && <Alert type={alert.type} text={alert.text} />}

// Method to call Alert;

// const handleAlert = ({ type, text }) => {
//   setAlert({ show: true, type, text });
//   setTimeout(() => {
//     setAlert({ show: false });
//   }, 3000);
// };
// handleAlert({ type: "danger", text: "all items deleted" });
// handleAlert({ type: "success", text: "item added successfully" });
