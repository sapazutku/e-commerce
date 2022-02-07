import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  //console.log(otherProps);
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      ></input>
      {label ? ( // if label is necessary control
        <label
          className={`${otherProps.value.length ? "shrink" : ""} form-input`}
        >{label}</label>
      ) : null}
    </div>
  );
};
export default FormInput;