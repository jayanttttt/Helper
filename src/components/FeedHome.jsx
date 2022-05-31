import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AddPost from "./AddPost";
import Posts from "./Posts";
import "./FeedHome.css";
import Pic7 from "../images/Pic7.png";
import Pic1 from "../images/Pic1.png";
import Pic9 from "../images/Pic9.png";
import Pic10 from "../images/Pic10.png";
import unsplash from "../images/unsplash_s0JxkTsSGyA.png";

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

  const name = localStorage.getItem("user_name");
  const [tab, setTab] = useState(true);

  return (
    <>
      <Header />
      {home ? (
        <>
          <p className="feedhome_text_head">Hi {name} 👋</p>
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
            {/* <img src={Pic7} alt="img" className="relaxing_mantra_img" /> */}
            <iframe
              className="relaxing_mantra_img"
              width="560"
              height="200"
              src="https://www.youtube.com/embed/yfUdn8AtwSw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
          <div style={{ minHeight: "84vh" }}>
            <p className="profile_text" style={{ margin: "14px 22.5px" }}>
              Activity
            </p>
          </div>
        </>
      ) : (
        ""
      )}
      {profile ? (
        <>
          <div
            style={{
              minHeight: "84vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={unsplash}
              alt=""
              style={{
                height: "72px",
                width: "72px",
                marginTop: "40px",
                marginBottom: "12px",
              }}
            />
            <p
              className="profile_text"
              style={{
                marginBottom: "12px",
              }}
            >
              {name}, 26
            </p>
            <p
              className="profile_text_2"
              style={{
                marginBottom: "18px",
              }}
            >
              Joined the platform on 24th July, 2021
            </p>
            <div style={{ display: "flex" }}>
              <p
                className={tab ? "profile_text_3_active" : "profile_text_4"}
                onClick={() => setTab(true)}
              >
                Help Taken
              </p>
              <p
                className={!tab ? "profile_text_3_active" : "profile_text_3"}
                onClick={() => setTab(false)}
              >
                Help Given
              </p>
            </div>
            {tab ? (
              <img src={Pic9} alt="" style={{ width: "100%" }} />
            ) : (
              <img src={Pic10} alt="" style={{ marginTop: "90px" }} />
            )}
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
