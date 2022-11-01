import { Checkbox, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
function Home(props) {
  const toast = useToast();

  const [isloading, setisloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setisloading(true);
    props.setbarLoading(true);

    const data = {
      email: email,
      password: password,
    };

    try {
      axios
        .post("https://smmboostclub.herokuapp.com/user/login", data)
        .then(function (response) {
          const data = response.data;
          setisloading(false);
          const user = JSON.stringify(data);
          localStorage.setItem("user", user);
          sessionStorage.setItem("user", user);

          toast({
            title: "Login Success",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          props.setbarLoading(false);
          setTimeout(() => {
            toast({
              title: `welcome Back ${data.name}`,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
            navigate("order");
          }, 900);
        })
        .catch(function (error) {
          console.log(error);
          setisloading(false);
          props.setbarLoading(false);
          toast({
            title: error.response.data,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        });
    } catch (error) {
      setisloading(false);
      props.setbarLoading(true);
      toast({
        title: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="home">
      <div className="homeHeading">
        <h1>WELCOME</h1>
        <h2>INDIA'S #1</h2>
        <p>
          Best SMM Service
          <br />
          You Will Get Best & Best <span>QUALITY</span>
        </p>
      </div>

      <div className="loginForm">
        <h2>Sign In</h2>
        <br />

        <form onSubmit={login}>
          <input
            type="text"
            id="email"
            required
            autoComplete="true"
            placeholder="Username"
            onChange={(e) => {
              setemail(e.target.value);
            }}
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
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>

          <div className="rem">
            <Checkbox size="md" colorScheme="orange" defaultChecked></Checkbox>
            <p>Remember Me</p>
          </div>

          <button>{isloading ? <Spinner /> : "Sign In"}</button>
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

      <div className="total">
        <div className="icon">
          <span>
            <i class="fa-regular fa-clipboard-list"></i>
          </span>
        </div>
        <div className="text">
          <h2>51267</h2>
          <p>Total Order On Member Stocks</p>
        </div>
      </div>

      <div className="steps">
        <div className="heading">
          <h2>Where To Begin ?</h2>
          <h6>5 Step Is Given Below Please Read Carefully & Enjoy</h6>
        </div>

        <div className="step">
          <div className="number">1</div>
          <div className="text">
            <h4>Sign In</h4>
            <p>Sign In With New Account & Start A New Life</p>
          </div>
        </div>
        <div className="step">
          <div className="number">2</div>
          <div className="text">
            <h4>Add Funds</h4>
            <p>Add Funds In Your Account Via Payment Method You Choose</p>
          </div>
        </div>
        <div className="step">
          <div className="number">3</div>
          <div className="text">
            <h4>Select Service</h4>
            <p>Select Your Service For Grow Your Business</p>
          </div>
        </div>
        <div className="step">
          <div className="number">4</div>
          <div className="text">
            <h4>Place Your Order</h4>
            <p>Place Your Best Order Now</p>
          </div>
        </div>
        <div className="step">
          <div className="number">5</div>
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
