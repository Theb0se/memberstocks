import React from "react";
import "./Contact.css";
import { Image } from "@chakra-ui/react";
import whatsapp from "../../images/whatsapp.gif";
import tg from "../../images/telegram.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contactHead">
        <h1>Need Help ?</h1>
        <p>Contact Us On</p>
      </div>
      <div className="contactBox">
        <div className="img">
          {" "}
          <Image src={whatsapp} alt="Dan Abramov" w={50} />
        </div>
        <div className="text">
          <h1>WhatsApp</h1>
          <a href="https://wa.me/+919516945996">9516945996</a>
        </div>
      </div>
      <div className="contactBox">
        <div className="img">
          {" "}
          <Image src={tg} alt="Dan Abramov" w={50} />
        </div>
        <div className="text">
          <h1>Telegram</h1>
          <a href="https://t.me/SmmBoostClub">@MemberStocks</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
