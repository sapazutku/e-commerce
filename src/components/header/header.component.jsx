import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useAuth } from "../../firebase/firebase.utils.js";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="options" to="/shop">
          SHOP
        </Link>
        <Link className="options" to="/shop">
          CONTACT
        </Link>
      </div>

    </div>
  );
};

export default Header;
