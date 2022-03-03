import './App.css';
import Home from './components/Home';
import SignIn from "./components/SignIn";
import CreateAccount from './components/CreateAccount';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
