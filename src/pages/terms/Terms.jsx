import React from "react";
import { Helmet } from "react-helmet";
import "./Terms.css";

function Terms() {
  return (
    <div className="terms">
      <Helmet>
        <title>Memberstock - Terms & Condition</title>
      </Helmet>
      <div className="termsDiv">
        <div className="termsHeadng">
          <h1>Terms And Conditions</h1>
        </div>
        <div className="genral">
          <p className="heading">
            <b>1. GENERAL</b>
          </p>
          <p></p>
          <ul>
            {" "}
            <li>
              By Placing An Order With Member Stocks , You Automatically Accept
              All The Below - Listed Terms Of Service Weather You Read Them Or
              Not .
            </li>
            <li>
              We Reserve The Right To Change These Terms Of Service Without
              Notice . You Are Expected To Read All Terms Of Service Before
              Placing Any Order To Ensure You Are Up To Date With Any Changes Or
              Any Future Changes.
            </li>
            <li>
              You Will Only Use The Member Stocks Website In a Manner Which
              Follows All Agreements Made With Telegram &amp; Other Social Media
              Site On Their Individual Terms Of Service Page.
            </li>
            <li>
              Member Stocks Rates Are Subject To Change At Any Time Without
              Notice . The Payment / Refund Policy Stay In Effect In The Case Of
              Rate Changes.
            </li>
            <li>
              Member Stocks Does Not Guarantee A Delivery Time For Any Services
              . We Offer Our Best Estimation For When the Order Will Be
              Delivered . This Is Only An Estimation And Member Stocks Will Not
              Refund Orders That Are Processing If You Feel They Are Taking It
              Too Long
            </li>
            <li>
              Member Stocks Tries Hard To Deliver Exactly What Is Expected From
              Us By Our Re - Seller . In This Case , We Reserve The Right To
              Change A Service Type If We Seem It Necessary To Complete An Order
              .
            </li>
          </ul>
        </div>

        <div className="otherPolicy ">
          <p className="heading">
            <b>2. SOME OTHER POLICY</b>
          </p>
          <p></p>
          <ul>
            <li>
              You Should Not Order For A Link If You Order Before And That Order
              Did Not Complete , Your Balance May Not Be Refunded.
            </li>
            <li>
              We Do Not Accept Any Responsibility On Your Action , Account
              Security And Other Issues Belongs The Clients .
            </li>
            <li>
              We Can Not Cancel Any Order , Please Read Terms And Condition
              Before Order .
            </li>
            <li>
              When Order Got Partial , Remains Already Added To Your Account .
            </li>
            <li>
              If Your Order Has Dropped Under The Start Count , We Will Not
              Refill Your Order . This Is Because Your Old Followers Are
              Dropping And We Are Not Covering Your Old Orders . Thank You For
              Your Understanding .
            </li>
            <li>
              No Refund Will Be Done If You Add Funds Mistakenly Or In Any Case
              . You Can Use Your Funds Via Current Services On The Panel .
            </li>
            <li>
              If You Have Problem With Any Order ( Such As Dropped , Not
              Completed ) Please Do Not Place Another Order Before Getting Your
              Refund Or Replacement For Order , If You Do , So It Will Be Your
              Loss We Will Not Provide Refunds For Such Cases As We Do Not Know
              Which Server / Order Gets Delivered And Which Does Not .
            </li>
            <li>
              System Will Look At Start Count When You Put Order And Mark
              Completed After Reaching Final Count . Please Don't Ask Us Cancel
              Or Anything With Reason . Views / Likes / Sub Come From My Real
              User , My Fans , Another Seller .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Terms;
