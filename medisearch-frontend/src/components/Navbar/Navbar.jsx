import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { ethers } from 'ethers';
import { loginUser } from '../../Actions/UserActions';
import { useDispatch, useSelector } from "react-redux";


function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  
    async function handleSignInClick() {
      try {
        
        if (typeof window.ethereum !== "undefined") {
          const provider = new ethers.BrowserProvider(window.ethereum);

          
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Get the connected account
          const accounts = await provider.listAccounts();

          if (accounts.length > 0) {
            // console.log(x, accounts, provider);
            await dispatch(loginUser(accounts[0], provider));
            // console.log("lj")
            // console.log(x)
            // navigate("/");
          }
        }
      } catch (error) {
        console.error("Error while connecting with MetaMask: ", error);
      }
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
        <li>
          <a href="/join">Sign-Up</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        {!isAuthenticated ? (
          <div>
            {/* <a href="/login" className="login-button">
          Login
        </a> */}
            <button className="login-button" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
        ) : (
          <div>
            <button className="login-button">Sign Out</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
