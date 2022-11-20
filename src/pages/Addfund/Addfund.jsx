import React from "react";
import { useState } from "react";
import "./Addfund.css";
import paytm from "../../images/paytm.jpg";
import phonepe from "../../images/ppay.jpg";
import gpay from "../../images/gpay.jpg";
import { DataState } from "../../Context/DataContext";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

function Addfund(props) {
  const [method, setmethod] = useState("paytm");
  const [loading, setloading] = useState(false);
  const [orderId, setorderId] = useState();
  const [amount, setamount] = useState();
  const { user } = DataState();

  const checkPayment = (e) => {
    e.preventDefault();
    const data = {
      userId: user.id,
      username: user.name,
      method: method,
      transactionID: orderId,
      amount: amount,
    };
    setloading(true);
    props.setbarLoading(true);
    axios
      .post("https://memberstocksserver.onrender.com/payment/addPaymentRequest", data)
      .then(function (response) {
        const msg = response.data;
        console.log(msg);
        setloading(false);
        props.setbarLoading(false);
        setorderId("");
        setamount("");
      })
      .catch(function (error) {
        console.log(error);
        setloading(false);
        props.setbarLoading(false);
      });
  };

  return (
    <div className="addfund">
      <div className="paymentCard">
        <label htmlFor="method">Method</label>
        <select
          name="method"
          id="method"
          onChange={(e) => {
            setmethod(e.target.value);
            setloading(false);
          }}
        >
          <option value="paytm">Paytm QR ( Minimum 100 ₹ )</option>
          <option value="phonepe">PhonePe QR ( Minimum 100 ₹ )</option>
          <option value="gpay">Gpay QR ( Minimum 100 ₹ )</option>
        </select>
        <br />
        <br />
        {/* paytm */}
        <div className={method === "paytm" ? "db" : "dn"}>
          <form onSubmit={checkPayment}>
            <label htmlFor="orderid">Order Id</label>
            <input
              type="text"
              name="orderid"
              id="orderid"
              value={orderId}
              required
              onChange={(e) => {
                setorderId(e.target.value);
              }}
              autocomplete="off"
            />
            <br />
            <br />
            <label htmlFor="amount">Amount</label>
            <input
              type="tel"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => {
                setamount(parseFloat(e.target.value));
              }}
              required
            />
            <br />
            <button>{loading ? <Spinner /> : "Check"}</button>
          </form>
          <br />
          <br />
          <div className="warning">Warning - Always Scan Latest QR Code</div>

          <div className="img">
            <img src={paytm} alt={method} />
          </div>
        </div>

        {/* pay */}
        <div className={method === "phonepe" ? "db" : "dn"}>
          <form onSubmit={checkPayment}>
            <label htmlFor="orderid">Transaction Id</label>
            <input
              type="text"
              name="orderid"
              id="orderid"
              value={orderId}
              required
              onChange={(e) => {
                setorderId(e.target.value);
              }}
              autocomplete="off"
            />
            <br />
            <br />
            <label htmlFor="amount">Amount</label>
            <input
              type="tel"
              name="amount"
              id="amount"
              value={amount}
              required
              onChange={(e) => {
                setamount(e.target.value);
              }}
            />
            <br />
            <button>{loading ? <Spinner /> : "Check"}</button>
          </form>
          <br />
          <br />
          <div className="warning">Warning - Always Scan Latest QR Code</div>

          <div className="img">
            <img src={phonepe} alt={method} />
          </div>
        </div>

        {/* gpay */}
        <div className={method === "gpay" ? "db" : "dn"}>
          <form onSubmit={checkPayment}>
            <label htmlFor="orderid">UPI Transaction Id</label>
            <input
              type="text"
              name="orderid"
              id="orderid"
              value={orderId}
              onChange={(e) => {
                setorderId(e.target.value);
              }}
              autocomplete="off"
            />
            <br />
            <br />
            <label htmlFor="amount">Amount</label>
            <input
              type="tel"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => {
                setamount(e.target.value);
              }}
            />
            <br />
            <button>{loading ? <Spinner /> : "Check"}</button>
          </form>
          <br />
          <br />
          <div className="warning">Warning - Always Scan Latest QR Code</div>
          <div className="img">
            <img src={gpay} alt={method} />
          </div>{" "}
        </div>

        <div className="instruction">
          <h1>INSTRUCTIONS :-</h1>
          <p>• Scan The QR Code & Make Payment .</p>
          <p>• Enter Order ID & Amount Below .</p>
          <p>• Wait Some Time & Your Funds Would Be Added .</p>
          <p>
            • If The QR Scan Is Not Working In {method} Then Use (
            {method === "paytm" && " PhonePe & Gpay"}{" "}
            {method === "phonepe" && "Paytm & Gpay"}{" "}
            {method === "gpay" && " PhonePe & Paytm"}).
          </p>

          <p className="impNote">
            <i>
              {" "}
              IMPORTANT NOTE - Please Using Latest QR Code Before Paying ,
              Otherwise Your Payment Will Not Be Accepted .
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Addfund;
