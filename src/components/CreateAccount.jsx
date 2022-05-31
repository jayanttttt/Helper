import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "../images/Pic1.png";

function CreateAccount() {
  const [name, setName] = useState("");

  const history = useNavigate();
  function handleSubmit() {
    history("/feedhome");
  }

  localStorage.setItem("user_name", name);

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
          <p className="text_main">Create Account</p>
          <div className="input_field">
            <form onSubmit={handleSubmit}>
              <input
                type="name"
                placeholder="Name"
                className="inputs"
                required
                onChange={(e) => setName(e.target.value)}
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                className="inputs"
                required
              />
              <input
                type="submit"
                value="CREATE AN ACCOUNT"
                className="btn_text"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
