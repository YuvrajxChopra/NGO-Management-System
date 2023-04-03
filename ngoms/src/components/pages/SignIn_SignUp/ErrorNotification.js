import React from "react";
import "./ErrorNotification.css";


function ErrorNotification(props) {
  return (
    <div className="errorContainer" id="errorContainer" onClick={props.clickFunction}>
      <div className="errorBody">{props.text}</div>
    </div>
  );
}



export default ErrorNotification;
