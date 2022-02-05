import React from "react";
import "./menu-item.style.scss";
const MenuItem = ({ title, imageUrl, size }) => {
  return ( 
    <div className={`${size} menu-item`}>
       {/* if we increase the size of this div we dont want others increase */}
      <div className="background-image" style={
        {backgroundImage: `url(${imageUrl})`}
      }/>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
