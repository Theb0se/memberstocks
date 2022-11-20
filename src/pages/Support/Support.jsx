import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./Support.css";
import randomInteger from "random-int";
import { DataState } from "../../Context/DataContext";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";

function Support() {
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();
  // eslint-disable-next-line
  const [image, setimage] = useState();
  const { user, Tickets, ticketLoading } = DataState();
  const [isloading, setisloading] = useState(false);

  const submitTicket = (e) => {
    e.preventDefault();
    setisloading(true);
    const random = randomInteger(10000000, 99999999);
    const data = {
      TicketId: random.toString(),
      userId: user.id,
      username: user.name,
      Subject: subject,
      Message: message,
    };

    axios
      .post("https://memberstocksserver.onrender.com/support/postSupport", data)
      .then(function (response) {
        const msg = response.data;
        console.log(msg);
        setisloading(false);
      })
      .catch(function (error) {
        const errmsg = JSON.stringify(error);
        console.log(errmsg);
        setisloading(false);
      });
  };

  console.log(Tickets, ticketLoading);

  return (
    <div className="support">
      <Helmet>
        <title>Memberstock - Support</title>
      </Helmet>
      <div className="supportMsg">
        <form onSubmit={submitTicket}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            onChange={(e) => {
              setsubject(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            required
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          />
          <br />
          <br />

          <Form.Group controlId="formFile" className="mb-3 fileIp">
            <Form.Label>Choose Image ( Optional )</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setimage(e.target.files[0]);
              }}
            />
          </Form.Group>

          <button>{isloading ? <Spinner /> : "Submit"}</button>
        </form>
      </div>

      <br />
      <br />

      <div className="tickets">
        <table>
          <thead>
            <tr>
              <th>Ticket Id </th>
              <th>Subject</th>
              <th>Status</th>
              <th>Last Update</th>
            </tr>
          </thead>
          {!ticketLoading ? (
            <tbody>
              {Tickets?.map((t) => (
                <tr>
                  <td>{t.TicketId}</td>
                  <td>{t.Subject}</td>
                  <td>{t.status}</td>
                  <td>{t.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <Spinner />
          )}
        </table>
      </div>
    </div>
  );
}

export default Support;
