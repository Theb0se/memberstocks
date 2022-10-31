import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const hamOpen = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="navbar">
      <div className="navbarMain">
        <div className="logo">
          <Link to="/">
            <h5>
              Member<span>Stocks</span>
            </h5>
          </Link>
        </div>
        <div className="navLinks">
          <ul>
            <Link to="/">
              <li className="active">Sign in</li>
            </Link>
            <Link to={"/signup"}>
              <li>Sign Up</li>
            </Link>
            <Link to="/api">
              <li>API</li>
            </Link>
            <Link to="contact">
              <li>Contact Us</li>
            </Link>
            <Link to={"terms"}>
              <li>Terms & Conditions</li>
            </Link>
          </ul>
        </div>
        <div className="ham">
          <Hamburger
            toggle={setOpen}
            onToggle={hamOpen}
            size={26}
            duration={0.5}
            color="#fff"
          />
        </div>
      </div>
      <div className={isOpen ? " hamMenu hamMenu-open" : "hamMenu"}>
        <ul>
          <Link to="/" onClick={hamOpen}>
            <li className="active">Sign in</li>
          </Link>
          <Link to={"/signup"} onClick={hamOpen}>
            <li>Sign Up</li>
          </Link>
          <Link to="/api" onClick={hamOpen}>
            <li>API</li>
          </Link>
          <Link to="contact" onClick={hamOpen}>
            <li>Contact Us</li>
          </Link>
          <Link to={"terms"} onClick={hamOpen}>
            <li>Terms & Conditions</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
