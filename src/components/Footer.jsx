import React from "react";
import Group1 from "../images/Group1.png";
import Group2 from "../images/Group2.png";
import Group3 from "../images/Group3.png";
import Group4 from "../images/Group4.png";

function Footer() {
  return (
    <>
      <div>
        <div>
          <img src={Group1} alt="icon" />
          <img src={Group2} alt="icon" />
          <img src={Group3} alt="icon" />
          <img src={Group4} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default Footer;
