import { Spinner } from "@chakra-ui/react";
import React from "react";
import "./Trackorder.css";
import { DataState } from "../../Context/DataContext";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";

function Trackorder() {
  const { allOrder, isloading } = DataState();
  console.log(allOrder);

  return (
    <div className="trackOrder">
      <div className="table">
        <table>
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
              <Spinner />
            ) : (
              allOrder.map((o) => (
                <tr>
                  <td>{o.orderNumber}</td>
                  <td>{<Moment format="DD/MM/YYYY">{o.updatedAt}</Moment>}</td>
                  <td>{o.link}</td>
                  <td>{Math.round(o.quantity * 0.12)} ₹</td>
                  <td>{o.start_count ? o.start_count : "null"} </td>
                  <td>{o.quantity}</td>
                  <td className="service" width="150px">{o.service}</td>
                  <td>{o.quantity * 0.12} ₹</td>
                  <td>{o.quantity * 0.12} ₹</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trackorder;
