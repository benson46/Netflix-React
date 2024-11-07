import React, { useEffect } from "react";
import "./Navbar.css";
import NetflixLogo from "../../assets/Navbar/NetflixLogo";
import SearchIcon from "../../assets/Navbar/search-icon";
import Notification from "../../assets/Navbar/notification";
import Netflixavatar from "../../assets/Navbar/Netflix-avatar";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar"); // Select the navbar element
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Add class when scrolled more than 50px
      } else {
        navbar.classList.remove("scrolled"); // Remove class when above 50px
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="first-session">
        <div className="logo">
          <a href="">
            <NetflixLogo />
          </a>
        </div>
        <div className="buttons-navbar">
          <a href="/" className="btn-header">
            Home
          </a>
          <a href="/" className="btn-header">
            TV Shows
          </a>
          <a href="/" className="btn-header">
            Movies
          </a>
          <a href="/" className="btn-header">
            New & Popular
          </a>
          <a href="/" className="btn-header">
            My List
          </a>
          <a href="/" className="btn-header">
            Browse by Languages
          </a>
        </div>
      </div>
      <div className="second-section">
        <div className="ss-icons">
          <SearchIcon />
        </div>
        <div className="ss-icons">
          <Notification />
        </div>
        <div className="ss-icons">
          <Netflixavatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
