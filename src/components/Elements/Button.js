import React from "react";

const Button = ({ label, color, type }) => {
  const style = {
    backgroundColor: `${color}`,
    width: "100%",
    borderRadius: "5px",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    outline: "none",
  };
  return (
    <button type={type} style={style}>
      {label}
    </button>
  );
};

export default Button;
