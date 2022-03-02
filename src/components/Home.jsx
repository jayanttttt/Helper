import React from "react";
import CreateAccount from "./CreateAccount";
import "./index.css";
import SignIn from "./SignIn";
import "../fonts/webfontkit-20220222-050347/stylesheet.css";
import "../fonts/webfontkit-20220222-060404/stylesheet.css";

function Home() {
  return (
    <div className="home_container_main">
      <div className="title_name">
        <p>Helper</p>
      </div>
      <div className="btn">
        <a href="./pages/SignIn.html">
          <button className="sign_in">Sign in</button>
        </a>
        <a href="./pages/CreateAccount.html">
          <button className="create_acc">Create Account</button>
        </a>
      </div>
      <p className="page_end">Take breath and feel calm</p>
    </div>
  );
}

export default Home;
