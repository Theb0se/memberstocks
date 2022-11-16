import React from "react";
import { useState } from "react";
import "./Addfund.css";
import paytm from "../../images/paytm.jpg";
import phonepe from "../../images/ppay.jpg";
import gpay from "../../images/gpay.jpg";
import { Button } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

function Addfund(props) {
  const [method, setmethod] = useState("paytm");
  const [loading, setloading] = useState(false);
  const [orderId, setorderId] = useState();
  const [amount, setamount] = useState();

  const checkPayment = () => {
    const data = {
      method,
      orderId,
      amount,
    };

    console.log(data);
    setloading(true);
    props.setbarLoading(true);
    setTimeout(() => {
      setloading(false);
      alert("Service Coming Soon");
      props.setbarLoading(false);
    }, 3000);
  };

  return (
    <div className="addfund">
      <Helmet>
        <title>Memberstock - Add Fund</title>
      </Helmet>
      <div className="paymentCard">
        <label htmlFor="method">Method</label>
        <select
          name="method"
          id="method"
          onChange={(e) => {
            setmethod(e.target.value);
          }}
        >
          <option value="paytm" id="SelectPaytm">
            Paytm QR ( Minimum 100 ₹ )
          </option>
          <option value="phonepe" id="SelectPhonepe">
            PhonePe QR ( Minimum 100 ₹ )
          </option>
          <option value="gpay" id="SelectGpay">
            Gpay QR ( Minimum 100 ₹ )
          </option>
        </select>
        <br />
        <br />
        {/* paytm */}
        <div className={method === "paytm" ? "db" : "dn"}>
          <label htmlFor="orderid">Order Id</label>
          <input
            type="text"
            name="orderid"
            id="orderid"
            onChange={(e) => {
              setorderId(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="amount">Amount</label>
          <input
            type="tel"
            name="amount"
            id="amount"
            onChange={(e) => {
              setamount(e.target.value);
            }}
          />
          <br />
          <Button isLoading={loading} onClick={checkPayment}>
            Check
          </Button>
          <br />
          <br />
          <div className="warning">Warning - Always Scan Latest QR Code</div>

          <div className="img">
            <img src={paytm} alt={method} />
          </div>
        </div>

        {/* pay */}
        <div className={method === "phonepe" ? "db" : "dn"}>
          <label htmlFor="orderid">Transaction Id</label>
          <input
            type="text"
            name="orderid"
            id="orderid"
            onChange={(e) => {
              setorderId(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="amount">Amount</label>
          <input
            type="tel"
            name="amount"
            id="amount"
            onChange={(e) => {
              setamount(e.target.value);
            }}
          />
          <br />
          <Button isLoading={loading} onClick={checkPayment}>
            Check
          </Button>
          <br />
          <br />
          <div className="warning">Warning - Always Scan Latest QR Code</div>

          <div className="img">
            <img src={phonepe} alt={method} />
          </div>
        </div>

        {/* gpay */}
        <div className={method === "gpay" ? "db" : "dn"}>
          <label htmlFor="orderid">UPI Transaction Id</label>
          <input
            type="text"
            name="orderid"
            id="orderid"
            onChange={(e) => {
              setorderId(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="amount">Amount</label>
          <input
            type="tel"
            name="amount"
            id="amount"
            onChange={(e) => {
              setamount(e.target.value);
            }}
          />
          <br />
          <Button isLoading={loading} onClick={checkPayment}>
            Check
          </Button>
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
