import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";
const Logout = () => {
  const navigate = useNavigate();
  const signOut = () => {
    googleLogout();
    localStorage.clear();
    navigate("/");
    console.log("logout successfully");
  };
  return <button onClick={signOut}>Logout</button>;
};

export default Logout;
