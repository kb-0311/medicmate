import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { loginUser, logoutUser } from "../../Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  // Function to handle logout
  const handleSignOutClick = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    alert("Logged Out");
    // window.location.reload();
    window.location.reload();
    navigate("/login");
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
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="navbar-brand">
          {windowWidth >= 550 && "Medic"}

          <img
            className="navbar-logo"
            src="https://i.imgur.com/V7hGxsI.png"
            alt="logo"
          ></img>
          {windowWidth >= 550 && "Mate"}
        </div>
      </a>

      <ul className="navbar-links">
        {/* <li>
          <a href="/request/1">DummyRequest</a>
        </li> */}
        <li>
          <a href="/allreq">All Requests</a>
        </li>
        <li>
          <a href="/completedreq">Completed Requests</a>
        </li>
        <li>
          <a href="#a">Pricing</a>
        </li>
        <li>
          <a href="#a">Services</a>
        </li>
        <li>
          <a href="#a">{windowWidth < 467 ? "About" : "About Us"}</a>
        </li>
        {!isAuthenticated && (
          <li>
            <a href="/signup">Sign-Up</a>
          </li>
        )}
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
            <button className="login-button" onClick={handleSignOutClick}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
