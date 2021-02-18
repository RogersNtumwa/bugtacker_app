import React from "react";
import "./input.scss";

const InputElement = ({ type, label, content, ...others }) => {
  return (
    <div className="formgroup">
      <label htmlFor={content}>{label}</label>
      <input type={type} id={content} {...others} autoComplete="off" />
    </div>
  );
};

export default InputElement;
