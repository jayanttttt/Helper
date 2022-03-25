import './App.css';
import Home from './components/Home';
import SignIn from "./components/SignIn";
import CreateAccount from './components/CreateAccount';
import FeedHome from "./components/FeedHome";
import FullPost from "./components/FullPost";
import EditPost from "./components/EditPost";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Pic6 from "./images/Pic6.png";
import Pic2 from "./images/Pic2.png";
import Pic3 from "./images/Pic3.png";
import Pic4 from "./images/Pic4.png";
import Pic5 from "./images/Pic5.png";
import Pic8 from "./images/Pic8.png";

function App() {
  const [posts, setPosts] = useState([
    {
      title: "Saw bad dream yesterday",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a sagittis platea et. Nam lectus cras magnis ut vivamus. Urna eu eget eget interdum id. Massa, blandit dictum amet dui magna purus gravida vel id. Feugiat arcu nec justo sagittis tristique turpis aenean rhoncus, facilisis. Id ultrices facilisis facilisi scelerisque neque, cras id tortor. Egestas ipsum eget eget aliquam amet pellentesque proin elementum egestas. Semper mattis et etiam velit. Curabitur cursus lectus amet, quisque aenean vel posuere nunc. Viverra magna vel condimentum diam quis nunc vel. Pharetra scelerisque aliquam elementum pellentesque amet, fringilla sapien tristique nullam. Vitae quam felis nibh mauris ultrices nulla aenean posuere vitae. Felis elit eleifend pharetra, malesuada turpis amet imperdiet amet. Consectetur turpis aliquet amet, lectus leo volutpat tempus cursus ullamcorper.",
      id: 1,
      img: Pic8,
    },
    {
      title: "Aree mori maiyaa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem a sagittis platea et. Nam lectus cras magnis ut vivamus. Urna eu eget eget interdum id. Massa, blandit dictum amet dui magna purus gravida vel id. Feugiat arcu nec justo sagittis tristique turpis aenean rhoncus, facilisis. Id ultrices facilisis facilisi scelerisque neque, cras id tortor. Egestas ipsum eget eget aliquam amet pellentesque proin elementum egestas. Semper mattis et etiam velit. Curabitur cursus lectus amet, quisque aenean vel posuere nunc. Viverra magna vel condimentum diam quis nunc vel. Pharetra scelerisque aliquam elementum pellentesque amet, fringilla sapien tristique nullam. Vitae quam felis nibh mauris ultrices nulla aenean posuere vitae. Felis elit eleifend pharetra, malesuada turpis amet imperdiet amet. Consectetur turpis aliquet amet, lectus leo volutpat tempus cursus ullamcorper.",
      id: 0,
      img: Pic8,
    },
  ]);
  const [feels] = useState([
    {
      img: Pic6,
      title: "Happy",
      id: 1,
    },
    {
      img: Pic2,
      title: "Confused",
      id: 2,
    },
    {
      img: Pic3,
      title: "Worried",
      id: 3,
    },
    {
      img: Pic4,
      title: "Depressed",
      id: 4,
    },
    {
      img: Pic5,
      title: "Crying",
      id: 5,
    },
  ])
  var ids = posts.length;
  const [hidden, setHidden] = useState(true);
  function handleNewPost() {
    ids += 1;
    let newPost = {
      title: document.getElementById("addtitle").value,
      description: document.getElementById("adddescription").value,
      id: ids,
      img: Pic8,
    };
    let newPosts = posts.concat(newPost);
    setHidden(true);
    setCurrentSelected();
    setPosts(newPosts);
  }
  function handleHidden() {
    setHidden(false);
  }
  const [currentSelected, setCurrentSelected] = useState();
  function handleSelect(feel) {
    setCurrentSelected(feel);
  }
  function handleLeave() {
    setHidden(true);
  }
  const [currentPost, setCurrentPost] = useState();
  function handleClick(post) {
    const currentPost = post;
    setCurrentPost(currentPost);
  }
  const [deletebox, setDeletebox] = useState(false);
  function handleDeleteBoxOpen() {
    setDeletebox(true);
  }

  function handleDeleteBoxClose() {
    setDeletebox(false);
  }

  function handleDeletePost(currentPost) {
    const deletePosts = posts.filter((c) => c.id !== currentPost.id);
    setDeletebox(false);
    setPosts(deletePosts);
  }
  function handleEditPost() {
    let newEditedPosts = posts;
    let index = posts.indexOf(currentPost);
    newEditedPosts[index] = {
      title: document.getElementById("editedtitle").value,
      description: document.getElementById("editeddescription").value,
      id: currentPost.id,
      img: currentPost.img,
    };
    setPosts(newEditedPosts);
  }

  return (
    <Router>
      <div className="scroll-bar"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/feedhome" element={<FeedHome feels={feels} handleNewPost={handleNewPost} posts={posts} hidden={hidden} handleHidden={handleHidden} currentSelected={currentSelected} handleSelect={handleSelect} handleLeave={handleLeave} handleClick={handleClick} />} />
        <Route path="/posts" element={<FullPost
          currentPost={currentPost}
          handleDeleteBoxOpen={handleDeleteBoxOpen}
          handleDeleteBoxClose={handleDeleteBoxClose}
          deletebox={deletebox}
          handleDeletePost={handleDeletePost}
        />} />
        <Route path="/postedit" element={<EditPost
          currentPost={currentPost}
          handleEditPost={handleEditPost}
        />} />
      </Routes>
    </Router>
  );
}

export default App;
