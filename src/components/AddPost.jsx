import React from "react";
import "./AddPost.css";

function AddPost(props) {
  const { handleNewPost, handleLeave } = props;
  const height = document.getElementById("root").scrollHeight;
  return (
    <>
      <div style={{ height: height }} className="add_post_main">
        <div className="add_post_box" onMouseLeave={handleLeave}>
          <div className="add_post_image_box">
            <p>Hi Rohan, I see feeling worried ?</p>
            <p>Please let us know about it.</p>
          </div>
          <p className="edit_text_main">Title</p>
          <textarea
            placeholder="Type here"
            className="addpost_textarea_title"
            id="addtitle"
          />
          <p className="edit_text_main">Description</p>
          <textarea
            placeholder="Type here"
            className="addpost_textarea_desc"
            id="adddescription"
          />
          <div className="add_new_post_button">
            <button onClick={handleNewPost}>Share your feelings</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPost;
