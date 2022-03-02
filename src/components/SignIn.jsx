import React from "react";
import pic1 from "../images/Pic1.png";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="box">
      <a href="../Index.html">
        <div className="back_img">
          <img src={pic1} alt="Back_icon" />
        </div>
      </a>
      <div className="input_box">
        <p className="text_main">Sign In</p>
        <div className="input_field">
          <form>
            <input type="email" placeholder="Email" className="inputs" required />
            <input
              type="password"
              placeholder="Password"
              className="inputs"
              required
            />
            <a href="">
              <p className="for_pas">Forgot Password ?</p>
            </a>
            <input type="submit" value="LOG IN" className="btn_text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
