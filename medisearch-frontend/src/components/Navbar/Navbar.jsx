import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { loginUser, logoutUser } from '../../Actions/UserActions';
import { useDispatch, useSelector } from "react-redux";



function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  
  // Function to handle logout
  const handleSignOutClick = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    alert("Logged Out")
    // Iske Baad redirect the user to the homepage or login page
    window.location.reload(); // Reload krdiya.. (just a Hack for logout)
  };

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {windowWidth >= 550 && "Medic"}
        <img
          className="navbar-logo"
          src="https://i.imgur.com/V7hGxsI.png"
          alt="logo"
        ></img>
        {windowWidth >= 550 && "Mate"}
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#a">Pricing</a>
        </li>
        <li>
          <a href="#a">Services</a>
        </li>
        <li>
          <a href="#a">{windowWidth < 467 ? "About" : "About Us"}</a>
        </li>
        <li>
          <a href="/join">Sign-Up</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        {!isAuthenticated ? (
          <div>
            <a href="/login" className="login-button">
          Login
        </a>
          </div>
        ) : (
          <div>
            <button className="login-button" onClick={handleSignOutClick}>Sign Out</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
