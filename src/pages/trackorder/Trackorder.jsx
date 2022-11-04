import { Spinner } from "@chakra-ui/react";
import React from "react";
import "./Trackorder.css";
import { DataState } from "../../Context/DataContext";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Trackorder() {
  const { user } = DataState();
  const [isloading, setisloading] = useState();
  const [allOrder, setallOrder] = useState([]);
  const [allOrdermain, setallOrdermain] = useState([]);

  let dt = [];

  useEffect(() => {
    setisloading(true);
    const data = {
      userId: user?.id,
    };
    axios
      .post("https://smmboostclub.herokuapp.com/order/getOrder", data)
      .then(function (response) {
        const data1 = response.data.order;
        const data2 = response.data.orders;

        for (let i = 0; i < data1.length; i++) {
          var d = { ...data1[i], ...data2[i] };
          dt.push(d);
        }
        const dtr = dt.reverse();
        setallOrder(dtr);
        setallOrdermain(dtr);
        console.log(dtr);
        setisloading(false);
      })

      .catch(function (error) {
        console.log(error);
        setisloading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  console.log(user);

  return (
    <div className="trackOrder">
      <div className="filter">
        <button
          value={""}
          onClick={() => {
            setallOrder(allOrdermain);
          }}
        >
          All
        </button>{" "}
        <button
          value={"Pending"}
          onClick={(e) => {
            const FilterArr = allOrdermain.filter(
              (a) => a.status === e.target.value
            );
            setallOrder(FilterArr);
          }}
        >
          Pending
        </button>
        <button
          value={"In progress"}
          onClick={(e) => {
            const FilterArr = allOrdermain.filter(
              (a) => a.status === e.target.value
            );
            setallOrder(FilterArr);
          }}
        >
          In Progress
        </button>
        <button
          value={"Completed"}
          onClick={(e) => {
            const FilterArr = allOrdermain.filter(
              (a) => a.status === e.target.value
            );
            setallOrder(FilterArr);
          }}
        >
          Completed
        </button>
        <button
          value={"Partial"}
          onClick={(e) => {
            const FilterArr = allOrdermain.filter(
              (a) => a.status === e.target.value
            );
            setallOrder(FilterArr);
          }}
        >
          Partial
        </button>
        <button
          value={"Processing"}
          onClick={(e) => {
            const FilterArr = allOrdermain.filter(
              (a) => a.status === e.target.value
            );
            setallOrder(FilterArr);
          }}
        >
          Processing
        </button>
        <button
          value={"Canceled"}
          onClick={(e) => {
            const FilterArr = allOrdermain.filter(
              (a) => a.status === e.target.value
            );
            setallOrder(FilterArr);
          }}
        >
          Canceled
        </button>
      </div>
      <div className="ttable">
        <Table>
          <thead>
            <tr>
              <th align="left">Id</th>
              <th align="left">Date</th>
              <th align="left">Link</th>
              <th align="left">Charge</th>
              <th align="left">Start Count</th>
              <th align="left">Quantity</th>
              <th align="left">Service</th>
              <th align="left">Status</th>
              <th align="left">Remains</th>
            </tr>
          </thead>
          <tbody>
            {isloading ? (
              <div className="loadingDiv">
                <Spinner size="lg" />
              </div>
            ) : (
              allOrder.map((o) => (
                <tr>
                  <td>{o.orderNumber}</td>
                  <td>{<Moment format="DD/MM/YYYY">{o.updatedAt}</Moment>}</td>
                  <td>
                    <a href={o.link} target="_blank" rel="noopener noreferrer">
                      {o.link}
                    </a>
                  </td>
                  <td className="center">{Math.round(o.quantity * 0.12)} ₹</td>
                  <td className="center">
                    {o.start_count ? o.start_count : "null"}{" "}
                  </td>
                  <td className="center">{o.quantity}</td>
                  <td className="service" width="150px">
                    {o.service}
                  </td>
                  <td>{o.status}</td>
                  <td className="center">{o.remains}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Trackorder;
