import React from "react";
import "./index.css";
import "../fonts/webfontkit-20220222-050347/stylesheet.css";
import "../fonts/webfontkit-20220222-060404/stylesheet.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_container_main">
      <div className="container_main">
        <div className="title_name">
          <p>Helper</p>
        </div>
        <div className="btn">
          <Link to="/signin">
            <button className="sign_in">Sign in</button>
          </Link>
          <Link to="createaccount">
            <button className="create_acc">Create Account</button>
          </Link>
        </div>
        <p className="page_end">Take breath and feel calm</p>
      </div>
    </div>
  );
}

export default Home;
