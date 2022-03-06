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
        <div className="footer_main">
          <div>
            <img src={Group1} alt="icon" />
          </div>
          <div>
            <img src={Group2} alt="icon" />
          </div>
          <div>
            <img src={Group3} alt="icon" />
          </div>
          <div>
            <img src={Group4} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
