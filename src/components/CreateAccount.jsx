import React from "react";
import pic1 from "../images/Pic1.png";

function CreateAccount() {
  return (
    <div className="box">
      <a href="../Index.html">
        <div className="back_img">
          <img src={pic1} alt="Back_icon" />
        </div>
      </a>
      <div className="input_box">
        <p className="text_main">Create Account</p>
        <div className="input_field">
          <form>
            <input type="name" placeholder="Name" className="inputs" required />
            <input type="email" placeholder="Email" className="inputs" required />
            <input
              type="password"
              placeholder="Password"
              className="inputs"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputs"
              required
            />
            <input type="submit" value="CREATE AN ACCOUNT" className="btn_text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
