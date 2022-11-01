/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
const data = createContext();

function DataContext({ children }) {
  const [user, setuser] = useState();
  const [isloading, setisloading] = useState();
  const [allOrder, setallOrder] = useState([]);
  let dt = [];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user ? setuser(user) : setuser({});

    //get all orders
    setisloading(true);
    const data = {
      userId: user?.id,
    };
    user &&
      axios
        .post("https://smmboostclub.herokuapp.com/order/getOrder", data)
        .then(function (response) {
          const data1 = response.data.order;
          const data2 = response.data.orders;

          for (let i = 0; i < data1.length; i++) {
            var d = { ...data1[i], ...data2[i] };
            dt.push(d);
          }
          setallOrder(dt);
          setisloading(false);
          console.table(allOrder);
          setisloading(false);
        })

        .catch(function (error) {
          console.log(error);
          setisloading(false);
        });
  }, []);

  console.table(allOrder);

  return (
    <data.Provider value={{ user, setuser, allOrder, isloading }}>
      {children}
    </data.Provider>
  );
}

export default DataContext;

export const DataState = () => {
  return useContext(data);
};
