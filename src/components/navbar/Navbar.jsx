import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const hamOpen = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="navbar">
      <div className="navbarMain">
        <div className="logo">
          <a href="/public/index.html">
            <h5>
              Member<span>Stocks</span>
            </h5>
          </a>
        </div>
        <div className="navLinks">
          <ul>
            <li>Sign in</li>

            <li>API</li>

            <li>Sign Up</li>

            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="ham">
          <Hamburger
            onToggle={hamOpen}
            size={26}
            duration={0.5}
            color="#fff"
          />
        </div>
      </div>
      <div className={isOpen ? " hamMenu hamMenu-open" : "hamMenu"}>
        <ul>
          <li>Sign in</li>

          <li>API</li>

          <li>Sign Up</li>

          <li>Contact Us</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
