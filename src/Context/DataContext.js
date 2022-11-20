import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
const data = createContext();

function DataContext({ children }) {
  const [user, setuser] = useState();
  const [isLogin, setisLogin] = useState();
  const [Tickets, setTickets] = useState([]);
  const [ticketLoading, setticketLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setuser(user);
  }, [isLogin]);

  useEffect(() => {
    const data = {
      userId: user?.id,
    };
    setticketLoading(true);

    axios
      .post("https://memberstocksserver.onrender.com/support/getUserSupport", data)
      .then(function (response) {
        const msg = response.data;
        setTickets(msg);
        console.log(msg);
        setticketLoading(false);
      })
      .catch(function (error) {
        const errmsg = JSON.stringify(error);
        console.log(errmsg);
        setticketLoading(false);
      });
  }, [user]);

  return (
    <data.Provider
      value={{ user, setuser, isLogin, setisLogin, Tickets, ticketLoading }}
    >
      {children}
    </data.Provider>
  );
}

export default DataContext;

export const DataState = () => {
  return useContext(data);
};
