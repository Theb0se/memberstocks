import { Checkbox, Spinner, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const toast = useToast();
  const [isloading, setisloading] = useState(false);

  return (
    <div className="home">
      <div className="homeHeading">
        <h1>SMM PANEL</h1>
        <h2>INDIA'S #1</h2>
        <p>
          Best SMM Service
          <br />
          You Will Get Best & Best <span>QUALITY</span>
        </p>
      </div>

      <div className="loginForm">
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setisloading(true);

            setTimeout(() => {
              setisloading(false);
              toast({
                title: "Login Success.",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
            }, 3000);
          }}
        >
          <input
            type="text"
            id="email"
            required
            autoComplete="true"
            placeholder="Email / Username"
          />
          <br />
          <br />

          <div className="pass">
            {" "}
            <input
              type="password"
              id="email"
              required
              autoComplete="false"
              placeholder="Password"
            />
          </div>

          <div className="rem">
            <Checkbox size="md" colorScheme="orange" defaultChecked>
              <p>Remember Me</p>
            </Checkbox>
          </div>

          <button>{isloading ? <Spinner /> : "Login"}</button>
          <div className="signup">
            <p>
              Do Not Have An Account ? <Link to={"signup"}>Sign Up</Link>
            </p>
            <a href="/" className="for">
              Forget Password ?
            </a>
          </div>
        </form>
      </div>

      <div className="steps">
        <div className="heading">
          <h2>Where To Begin ?</h2>
          <h6>6 Step Is Given Below Please Read Carefully & Enjoy</h6>
        </div>
        <div className="step">
          <div className="number">1</div>
          <div className="text">
            <h4>Register In Panel</h4>
            <p>First You Register In Panel Via A Gmail</p>
          </div>
        </div>
        <div className="step">
          <div className="number">2</div>
          <div className="text">
            <h4>Sign In</h4>
            <p>Sign In With New Account & Start A New Life</p>
          </div>
        </div>
        <div className="step">
          <div className="number">3</div>
          <div className="text">
            <h4>Add Funds</h4>
            <p>Add Funds In Your Account Via Payment Method You Choose</p>
          </div>
        </div>
        <div className="step">
          <div className="number">4</div>
          <div className="text">
            <h4>Select Service</h4>
            <p>Select Your Service For Grow Your Business</p>
          </div>
        </div>
        <div className="step">
          <div className="number">5</div>
          <div className="text">
            <h4>Place Your Order</h4>
            <p>Place Your Best Order Now</p>
          </div>
        </div>
        <div className="step">
          <div className="number">6</div>
          <div className="text">
            <h4>Enjoy Your Magical Success</h4>
            <p>Your Sucess Become The Noise Further</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
