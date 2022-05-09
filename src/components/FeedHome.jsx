import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AddPost from "./AddPost";
import Posts from "./Posts";
import "./FeedHome.css";
import Pic7 from "../images/Pic7.png";
import Pic1 from "../images/Pic1.png";
import Pic9 from "../images/Pic9.svg";
import Pic10 from "../images/Pic10.svg";

function FeedHome(props) {
  const {
    feels,
    handleNewPost,
    posts,
    hidden,
    handleHidden,
    currentSelected,
    handleSelect,
    handleLeave,
    handleClick,
  } = props;

  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [activity, setActivity] = useState(false);
  const [profile, setProfile] = useState(false);
  const handleHome = () => {
    setHome(true);
    setSearch(false);
    setActivity(false);
    setProfile(false);
  };
  const handleSearch = () => {
    setHome(false);
    setSearch(true);
    setActivity(false);
    setProfile(false);
  };
  const handleActivity = () => {
    setHome(false);
    setSearch(false);
    setActivity(true);
    setProfile(false);
  };
  const handleProfile = () => {
    setHome(false);
    setSearch(false);
    setActivity(false);
    setProfile(true);
  };

  const [image, setImage] = useState(true);
  const handleLeft = () => {
    setImage(true);
  };
  const handleRight = () => {
    setImage(false);
  };

  return (
    <>
      <Header />
      {home ? (
        <>
          <p className="feedhome_text_head">Hi Rohan 👋</p>
          <p className="feedhome_text_main">How are you feeling today ?</p>
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
          {currentSelected ? (
            <div className="feedhome_share_main">
              <div className="feedhome_share_text">
                <p>Please share your feeling with us and feel&nbsp;</p>
                <p className="green">calm</p>
              </div>
              <button onClick={handleHidden}>Share your feelings</button>
            </div>
          ) : (
            ""
          )}
          {hidden ? (
            ""
          ) : (
            <AddPost handleNewPost={handleNewPost} handleLeave={handleLeave} />
          )}
          <div className="relaxing_mantra_main">
            <div className="relaxing_mantra_text">
              <p className="relaxing_mantra_text_black">Relaxing&nbsp;</p>
              <p className="relaxing_mantra_text_green">Mantra</p>
            </div>
            <img src={Pic7} alt="img" className="relaxing_mantra_img" />
          </div>
          <div className="help_pannel_main">
            <div className="help_pannel_top">
              <p className="help_pannel_text1">All Post</p>
              <p className="help_pannel_text2">View All</p>
            </div>
            <Posts posts={posts} handleClick={handleClick} />
          </div>
        </>
      ) : (
        ""
      )}
      {search ? (
        <>
          <div style={{ minHeight: "84vh" }}>
            <div>
              <div style={{ padding: "16px 16px" }}>
                <img src={Pic1} alt="" />
              </div>
              <div style={{ padding: "0px 16px" }}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    padding: "0px 10px",
                    width: "93%",
                    height: "40px",
                    fontFamily: "poppinslight",
                    fontWeight: "900",
                    outline: "none",
                    fontSize: "16px",
                    borderRadius: "6px",
                    border: "2px solid #3a9fe9",
                  }}
                />
              </div>
            </div>
            <p
              style={{
                transform: "translate(0vw, 24vh)",
                fontFamily: "poppinslight",
                fontWeight: 900,
                fontSize: "36px",
                lineHeight: "54px",
                color: "rgba(50, 78, 126, 0.62)",
                textAlign: "center",
              }}
            >
              explore helpers <br /> near you
            </p>
          </div>
        </>
      ) : (
        ""
      )}
      {activity ? (
        <>
          <h1 style={{ minHeight: "84vh" }}>Activity</h1>
        </>
      ) : (
        ""
      )}
      {profile ? (
        <>
          <div style={{ minHeight: "84vh" }}>
            {image ? (
              <img src={Pic9} alt="" style={{ paddingTop: "20px" }} />
            ) : (
              <img src={Pic10} alt="" style={{ paddingTop: "20px" }} />
            )}
            <div
              style={{
                display: "flex",
                width: "100%",
                position: "absolute",
                top: "262px",
                opacity: "0",
              }}
            >
              <div style={{ width: "50%" }}>
                <button
                  style={{ width: "100%", padding: "20px" }}
                  onClick={handleLeft}
                >
                  Left
                </button>
              </div>
              <div style={{ width: "50%" }}>
                <button
                  style={{ width: "100%", padding: "20px" }}
                  onClick={handleRight}
                >
                  Right
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <Footer
        handleHome={handleHome}
        handleSearch={handleSearch}
        handleActivity={handleActivity}
        handleProfile={handleProfile}
      />
    </>
  );
}

export default FeedHome;
