import { Checkbox, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [isloading, setisloading] = useState(false);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [number, setnumber] = useState();
  const [password, setpassword] = useState();
  const [cnfPass, setcnfPass] = useState();
  const toast = useToast();
  const ref = useRef();
  const navigate = useNavigate();

  const Signup = (e) => {
    setisloading(true);
    e.preventDefault();

    if (!ref.current.checked) {
      setisloading(false);
      toast({
        title: "Please Agree to Terms and Conditions",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else if (password !== cnfPass) {
      setisloading(false);
      toast({
        title: "Password Does Not Match",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      const data = {
        name,
        email,
        number,
        password,
      };
      try {
        axios
          .post("https://smmboostclub.herokuapp.com/user/signup", data)
          .then(function (response) {
            setisloading(false);
            toast({
              title: "Account created.",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
            setTimeout(() => {
              toast({
                title: `welcome  ${response.data.name}.`,
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
        console.log(error);
        toast({
          title: "Something Went Wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  return (
    <div className="signupPage">
      <div className="loginForm">
        <h2>Sign Up</h2>
        <form onSubmit={Signup}>
          {" "}
          <input
            type="text"
            required
            placeholder="Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="email"
            required
            placeholder="Email "
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="tel"
            required
            autoComplete="true"
            placeholder="Number "
            onChange={(e) => {
              setnumber(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            required
            autoComplete="true"
            placeholder="Password "
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <br />
          <br />
          <div className="pass">
            {" "}
            <input
              type="password"
              required
              autoComplete="false"
              placeholder="Comfirm Password"
              onChange={(e) => {
                setcnfPass(e.target.value);
              }}
            />
          </div>
          <div className="rem">
            <Checkbox size="md" colorScheme="orange" ref={ref}>
              <p>Yes , I Agree To Term & Condition !</p>
            </Checkbox>
          </div>
          <button>{isloading ? <Spinner /> : "Signup"}</button>
          <div className="signin">
            <p>
              Already Have An Account ? <Link to={"/"}>Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
