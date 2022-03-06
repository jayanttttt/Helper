import './App.css';
import Home from './components/Home';
import SignIn from "./components/SignIn";
import CreateAccount from './components/CreateAccount';
import FeedHome from "./components/FeedHome";
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

function App() {
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/feedhome" element={<FeedHome feels={feels} />} />
      </Routes>
    </Router>
  );
}

export default App;
