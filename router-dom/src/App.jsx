import { Routes, Route, Link } from "react-router-dom";
import Home from './component/home';
import About from "./component/about";
import Contact from "./component/contact";
import Dashboard from "./component/dashboard";
import Profile from "./component/profile";
import Settings from "./component/settings";
import User from "./component/User"
import './App.css';
import Registration from "./component/registration";

function App() {
  return (
    <>
      <h1>React Router DOM</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/user/101">User</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/registration">Registration</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />

        {/*Nested routes properly defined */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </>
  );
}

export default App;
