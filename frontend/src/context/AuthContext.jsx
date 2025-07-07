// context/AuthContext.js
import React, { useState, useEffect, createContext } from "react";
import { AxiosInstance } from "../routes/axiosInstance";

export const AuthGlobalContext = createContext();

const AuthContext = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkLoggedInUser = async () => {
    try {
      const res = await AxiosInstance.get("/user/me");
      setLoggedInUser(res.data.success); // true or false
    } catch (err) {
      setLoggedInUser(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLoggedInUser(); // run once when app loads
  }, []);

  return (
    <AuthGlobalContext.Provider
      value={{ loggedInUser, setLoggedInUser, checkLoggedInUser, loading }}
    >
      {children}
    </AuthGlobalContext.Provider>
  );
};

export default AuthContext;
