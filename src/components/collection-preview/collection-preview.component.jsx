import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";

const CollectionPreview = ({ title, items }) => {
  //console.log(items)
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          // just show 4 items of categories
          items
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  );
};

export default CollectionPreview;
