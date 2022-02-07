import React from "react";

import "./collection-item.style.scss";
// add imageUrl to class who name is "image"
const CollectionItem = ({ item }) => {
  //console.log(item.imageUrl);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
// <img alt="shop" src={require(imageUrl)}></img>
