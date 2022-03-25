import React from "react";
import "./Header.css";
import alert from "../images/alert.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header_container_main">
        <div className="header_main">
          <Link to="/feedhome">
            <p className="header_text">Helper</p>
          </Link>
          <img src={alert} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default Header;
