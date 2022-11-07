import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataState } from "../../Context/DataContext";

function Navbar(props) {
  const [isOpen, setOpen] = useState(false);
  const loactaion = useLocation();
  const { user, setisLogin, isLogin } = DataState();
  const pathName = loactaion.pathname;
  const navigate = useNavigate();

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
        <div className={user ? "navLinks navlinkOver" : "navLinks"}>
          {!user ? (
            <ul>
              <Link to="/">
                <li className={pathName === "/" && "active"}>Sign in</li>
              </Link>
              <Link to={"/signup"}>
                <li className={pathName === "/signup" && "active"}>Sign Up</li>
              </Link>
              <Link to="/api">
                <li className={pathName === "/api" && "active"}>API</li>
              </Link>
              <Link to="contact">
                <li className={pathName === "/contact" && "active"}>
                  Contact Us
                </li>
              </Link>
              <Link to={"terms"}>
                <li className={pathName === "/terms" && "active"}>
                  Terms & Conditions
                </li>
              </Link>
            </ul>
          ) : (
            <ul>
              <Link to="/order">
                <li className={pathName === "/order" && "active"}>New Order</li>
              </Link>
              <Link to={"/services"}>
                <li className={pathName === "/services" && "active"}>
                  Services
                </li>
              </Link>
              <Link to="/trackorder">
                <li className={pathName === "/trackorder" && "active"}>
                  Track Order
                </li>
              </Link>
              <Link to="fund">
                <li className={pathName === "/fund" && "active"}>Add Fund</li>
              </Link>
              <Link to={"support"}>
                <li className={pathName === "/support" && "active"}>Support</li>
              </Link>
              <Link to={"update"}>
                <li className={pathName === "/update" && "active"}>Update</li>
              </Link>
              <Link to={"account"}>
                <li className={pathName === "/account" && "active"}>Account</li>
              </Link>
              <li
                onClick={() => {
                  props.setbarLoading(true);
                  setTimeout(() => {
                    setisLogin(isLogin ? false : true);
                    props.setbarLoading(false);
                    localStorage.removeItem("user");
                    navigate("/");
                  }, 2200);
                }}
              >
                logout
              </li>
            </ul>
          )}
        </div>
        <div className={user ? "ham hamShow" : "ham"}>
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
        {!user ? (
          <ul>
            <Link to="/" onClick={hamOpen}>
              <li className={pathName === "/" && "active"}>Sign in</li>
            </Link>
            <Link to={"/signup"} onClick={hamOpen}>
              <li className={pathName === "/signup" && "active"}>Sign Up</li>
            </Link>
            <Link to="/api" onClick={hamOpen}>
              <li className={pathName === "/api" && "active"}>API</li>
            </Link>
            <Link to="contact" onClick={hamOpen}>
              <li className={pathName === "/contact" && "active"}>
                Contact Us
              </li>
            </Link>
            <Link to={"terms"} onClick={hamOpen}>
              <li className={pathName === "/terms" && "active"}>
                Terms & Conditions
              </li>
            </Link>
          </ul>
        ) : (
          <ul>
            <Link to="/order" onClick={hamOpen}>
              <li className={pathName === "/order" && "active"}>New Order</li>
            </Link>
            <Link to={"/services"} onClick={hamOpen}>
              <li className={pathName === "/services" && "active"}>Services</li>
            </Link>
            <Link to="/trackorder" onClick={hamOpen}>
              <li className={pathName === "/trackorder" && "active"}>
                Track Order
              </li>
            </Link>
            <Link to="fund" onClick={hamOpen}>
              <li className={pathName === "/fund" && "active"}>Add Fund</li>
            </Link>
            <Link to={"support"} onClick={hamOpen}>
              <li className={pathName === "/support" && "active"}>Support</li>
            </Link>
            <Link to={"update"} onClick={hamOpen}>
              <li className={pathName === "/update" && "active"}>Update</li>
            </Link>
            <Link to={"account"} onClick={hamOpen}>
              <li className={pathName === "/account" && "active"}>Account</li>
            </Link>
            <li
              onClick={() => {
                props.setbarLoading(true);
                setTimeout(() => {
                  setisLogin(isLogin ? false : true);
                  props.setbarLoading(false);
                  localStorage.removeItem("user");
                  navigate("/");
                  isOpen ? setOpen(false) : setOpen(true);
                }, 2200);
              }}
            >
              logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
