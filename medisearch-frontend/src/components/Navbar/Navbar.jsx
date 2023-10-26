import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        {windowWidth >= 550 && "Medi"}
        <img
          className="navbar-logo"
          src="https://i.imgur.com/V7hGxsI.png"
          alt="logo"
        ></img>
        {windowWidth >= 550 && "Search"}
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
        {/* <li>
          <a href="#a">Contact Us</a>
        </li> */}
      </ul>
      <div className="navbar-buttons">
        <a href="#a" className="login-button">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
