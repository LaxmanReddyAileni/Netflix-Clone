import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    //scroll listener
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        //Scroll in Y direction
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll"); // remove listener not repeat the useEffect again and again
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Profile_avatar_placeholder.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
