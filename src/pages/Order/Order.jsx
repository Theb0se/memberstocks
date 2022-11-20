import axios from "axios";
import React, { useState } from "react";
import "./Order.css";
import { Spinner } from "@chakra-ui/react";
import { DataState } from "../../Context/DataContext";
import { Helmet } from "react-helmet";

function Order(props) {
  const [service, setservice] = useState();
  const [quantity, setQuantity] = useState(0);
  const [Link, setLink] = useState();
  const [isloading, setisloading] = useState(false);
  const [msgtype, setmsgtype] = useState();
  const [isMsg, setisMsg] = useState(false);
  const [msg, setmsg] = useState();
  const [msgId, setmsgId] = useState();

  const { user } = DataState();

  const placeOrder = (e) => {
    e.preventDefault();
    setisloading(true);
    props.setbarLoading(true);
    setisMsg(false);

    try {
      const newOrder = {
        key: "8eac711290c821166246944b29bf1f62",
        action: "add",
        service: "1983",
        link: Link,
        quantity: quantity,
      };
      console.log(newOrder);
      axios
        .post("https://memberstocksserver.onrender.com/neworder", newOrder)
        .then(function (response) {
          const msg = response.data;
          console.log(msg);
          props.setbarLoading(false);
          setisloading(false);
          if (msg.error) {
            console.log(msg.error);
            setmsgtype(false);
            setmsg("Incorrect Link");
            setisMsg(true);
          }
          if (msg.order) {
            setmsgId(msg.order);
            const orderData = {
              orderNumber: msg.order,
              userId: user.id,
              email: user.email,
              username: user.name,
              service:
                "1 - Telegram Members { Non Drop } ( 10 / Day ) ( Max - 20K ) | Instant Start | Best Working - ₹ 120 Per 1000",
              link: Link,
              quantity: quantity,
            };

            axios
              .post(
                "https://memberstocksserver.onrender.com/order/postOrder",
                orderData
              )
              .then(function (response) {
                const msg = response.data;
                console.log(msg);
              })
              .catch(function (error) {
                const errmsg = JSON.stringify(error);
                console.log(errmsg);
              });
            setisMsg(true);
            setmsgtype(true);
            setmsg("Order Placed Successfully");
          }
        })
        .catch(function (error) {
          console.log(error);
          props.setbarLoading(false);
          setisloading(false);
        });
    } catch (error) {
      props.setbarLoading(false);
      setisloading(false);
    }
  };

  return (
    <div className="order">
      <Helmet>
        <title>Memberstock - New Order</title>
      </Helmet>
      <div className="infos members">
        <div className="icon">
          <span>
            <i class="fa-solid fa-users"></i>
          </span>
        </div>
        <div className="text">
          <p>Total Users</p>
          <h2>0</h2>
        </div>
      </div>

      {/* Balance */}
      <div className="infos blnc">
        <div className="icon">
          <span>
            <i class="fa-regular fa-wallet"></i>
          </span>
        </div>
        <div className="text">
          <p>Account Balance</p>
          <h2>₹ 0</h2>
        </div>
      </div>

      {/* spendings */}
      <div className="infos spendings">
        <div className="icon">
          <span>
            <i class="fa-regular fa-chart-mixed"></i>
          </span>
        </div>
        <div className="text">
          <p>Account Spendings</p>
          <h2>₹ 0</h2>
        </div>
      </div>

      {/* placing Order */}
      <div className="newOrder">
        <h1>New Order</h1>
        {isMsg && (
          <div className={msgtype ? "msgBox success" : "msgBox error"}>
            {msgtype ? (
              <>
                <div className="msghead">Your Order Recevied</div>
                <p>{`Order Id : ${msgId}`}</p>
                <p>
                  Service : Telegram Members ( Non Drop ) ( 10 / Day ) ( Max -
                  20K ) | Instant Start | Best Working - ₹ 125 Per 1000
                </p>
                <p>{`Link : ${Link}`}</p>
                <p>{`Quantity : ${quantity}`}</p>
                <p>{`Charge : ₹ ${quantity * 0.125}`}</p>
                <p>{`Balence : 0`}</p>
              </>
            ) : (
              "Incorrect Link"
            )}
          </div>
        )}
        <form onSubmit={placeOrder}>
          <div className="category">
            <label htmlFor="serviceSelect">Category</label>
            <select
              id="serviceSelect"
              onChange={(e) => {
                setservice(e.target.value);
              }}
            >
              <option value="1">Select Service</option>
              <option value="2">Telegram - ( Non Drop ) Members</option>
            </select>
          </div>

          <div class="service">
            <label htmlFor="serviceSelect">Service</label>
            <select>
              {service === "2" && (
                <option value="1">
                  <span className="orng"> 1 </span> - Telegram Members ( Non
                  Drop ) ( 10 / Day ) ( Max - 20K ) | Instant Start | Best
                  Working - ₹ 125 Per 1000
                </option>
              )}
            </select>
          </div>
          {/* description */}
          <div className="desc">
            <label htmlFor="">Description</label>
            <div className="descIp">
              {service === "2" && (
                <p id="descText" class="d-none">
                  Non Drop Members <br />
                  Last Drop ( 1 % ) <br />
                  No Reffil & No Refund Gurantee <br />
                  Best Service For Telegram Channels <br />
                </p>
              )}
            </div>
          </div>

          {/* LinkInput */}
          <div className="link">
            <label htmlFor="Link">Link</label>
            <input
              type="text"
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          {/* Quantity */}
          <div className="quantity">
            <label htmlFor="q">Quantity</label>
            <input
              type="tel"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <p>Min: 100 - Max: 20000</p>
          </div>
          {/* charge */}
          <div className="charge">
            <label htmlFor="Link">Charge</label>
            <input type="text" disabled value={`₹ ${quantity * 0.125}`} />
          </div>

          <button> {isloading ? <Spinner /> : "Place Order"} </button>
        </form>

        {isMsg && (
          <div className={msgtype ? "msgBox success" : "msgBox error"}>
            {msg}
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
