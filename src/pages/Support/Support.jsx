import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./Support.css";

function Support() {
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();
  const [image, setimage] = useState();

  const submitTicket = (e) => {
    e.preventDefault();
    console.log(subject, message, image);
  };

  return (
    <div className="support">
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

          <button>Submit</button>
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
          <tbody>
            <tr>
              <td>none</td>
              <td>none</td>
              <td>none</td>
              <td>none</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Support;
