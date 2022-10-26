import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeHeading">
        <h1>
          WORLD'S #1 TELEGRAM SMM PANEL.
          <span> Telegram Members Main Provider.</span>
        </h1>
      </div>
      <div className="desc">
        Best Telegram SMM Panel to Buy TeleGram Subscribers, Buy TeleGram Views,
        Buy TeleGram Vote, Buy TeleGram Members, Buy TeleGram Fake Members, Buy
        TeleGram Dead Members and many more! Best Telegram SMM Panel and
        Cheapest Telegram SMM Reseller Panel.
      </div>
      <div className="loginForm">
        <h2>Login</h2>
        <form
          onSubmit={() => {
            alert(55);
          }}
        >
          <label htmlFor="email">Username Or Email</label>
          <input type="text" id="email" required autoComplete="true" />
          <br />
          <br />

          <div className="pass">
            {" "}
            <label htmlFor="email">Password</label>
            <input type="password" id="email" required autoComplete="false" />
            <a href="/" className="forget">
              Forget Password ?
            </a>
          </div>

          <button>Login</button>
          <div className="signup">
            <p>
              Do Not Have An Account ? <a href="/">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      <div className="totalMember">
        <div className="icon">
          <span>
            <i class="fa-regular fa-clipboard-list"></i>
          </span>
        </div>
        <div className="text">
          <h1>5114032</h1>
          <p>Total Members.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
