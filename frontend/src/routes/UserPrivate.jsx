import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthGlobalContext } from "../context/AuthContext";

const UserPrivate = ({ children }) => {
  const { loggedInUser, checkLoggedInUser, loading } = useContext(AuthGlobalContext);

  useEffect(() => {
    checkLoggedInUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return loggedInUser ? children : <Navigate to="/login" />;
};

export default UserPrivate;
