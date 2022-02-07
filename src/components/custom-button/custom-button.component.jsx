import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogle, ...otherProps }) => (
  <button className={`${isGoogle ? "google-sign" : ""} custom-button`}>
    {children}
  </button>
);

export default CustomButton;
