import React from "react";
import Group1 from "../images/Group1.png";
import Group2 from "../images/Group2.png";
import Group3 from "../images/Group3.png";
import Group4 from "../images/Group4.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer_container_main">
        <input type="radio" name="slider" id="home" defaultChecked />
        <input type="radio" name="slider" id="search" />
        <input type="radio" name="slider" id="message" />
        <input type="radio" name="slider" id="profile" />
        <div className="footer_main">
          <label htmlFor="home">
            <div>
              <img src={Group1} alt="icon" id="img1" />
            </div>
          </label>
          <label htmlFor="search">
            <div>
              <img src={Group2} alt="icon" id="img2" />
            </div>
          </label>
          <label htmlFor="message">
            <div>
              <img src={Group3} alt="icon" id="img3" />
            </div>
          </label>
          <label htmlFor="profile">
            <div>
              <img src={Group4} alt="icon" id="img4" />
            </div>
          </label>
          <div className="slider"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
