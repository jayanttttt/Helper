import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "../images/Pic1.png";
import "./SignIn.css";

function SignIn() {
  const history = useNavigate();
  function handleSubmit() {
    history("/feedhome");
  }

  return (
    <div className="box">
      <Link to="/">
        <div className="back_img">
          <img src={pic1} alt="Back_icon" />
        </div>
      </Link>
      <div className="container_main">
        <div className="title_name">
          <p>Helper</p>
        </div>
        <div className="input_box">
          <p className="text_main">Sign In</p>
          <div className="input_field">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="inputs"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="inputs"
                required
              />
              <Link to="#">
                <p className="for_pas">Forgot Password ?</p>
              </Link>
              <input type="submit" value="LOG IN" className="btn_text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
