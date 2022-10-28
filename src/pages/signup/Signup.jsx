import { Checkbox, Spinner, Toast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [isloading, setisloading] = useState(false);

  return (
    <div className="signupPage"  data-aos="fade-up" data-aos-duration="800">
      <div className="loginForm">
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setisloading(true);

            setTimeout(() => {
              setisloading(false);
              Toast({
                title: "Login Success.",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
            }, 3000);
          }}
        >
          {" "}
          <input type="text" required placeholder="Name" />
          <br />
          <br />
          <input type="email" required placeholder="Email " />
          <br />
          <br />
          <input
            type="tel"
            required
            autoComplete="true"
            placeholder="Number "
          />
          <br />
          <br />
          <input
            type="password"
            required
            autoComplete="true"
            placeholder="Password "
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
            />
          </div>
          <div className="rem">
            <Checkbox size="md" colorScheme="orange" defaultChecked>
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
