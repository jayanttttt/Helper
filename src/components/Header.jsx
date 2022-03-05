import React from "react";
import "./Header.css";
import alert from "../images/alert.png";

function Header() {
  return (
    <>
      <div className="header_container_main">
        <div className="header_main">
          <div>
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
          <p className="header_text">Helper</p>
          <img src={alert} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default Header;
