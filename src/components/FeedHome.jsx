import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./FeedHome.css";

function FeedHome(props) {
  const { feels } = props;
  const [currentSelected, setCurrentSelected] = useState();
  function handleSelect(feel) {
    setCurrentSelected(feel);
  }

  return (
    <>
      <Header />
      <p className="feedhome_text_main">
        Hi Rohan ! How are you feeling today ?
      </p>
      <div className="slider_container_main">
        <div className="slider_container">
          {feels.map((feel) => (
            <div
              key={feel.id}
              className={
                feel === currentSelected
                  ? "feeling_container_active"
                  : "feeling_container"
              }
              onClick={() => handleSelect(feel)}
            >
              <img src={feel.img} alt="img" />
              <p className="slider_text_main">{feel.title}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="feedhome_text_main">What makes you feel like this?</p>
      <textarea placeholder="Share whatever that is disturbing you..." className="text_input" />
      <Footer />
    </>
  );
}

export default FeedHome;
