import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
const data = createContext();

function DataContext({ children }) {
  const [user, setuser] = useState();
  const [isLogin, setisLogin] = useState();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setuser(user);
  }, [isLogin]);

  return (
    <data.Provider value={{ user, setuser, isLogin, setisLogin }}>
      {children}
    </data.Provider>
  );
}

export default DataContext;

export const DataState = () => {
  return useContext(data);
};
