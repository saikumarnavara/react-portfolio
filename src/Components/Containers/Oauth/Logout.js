import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Logout = () => {
  const navigate = useNavigate();
  const signOut = () => {
    googleLogout();
    toast("Logout Successfully", {
      theme: "dark",
      type: "success",
    });
    localStorage.clear();
    navigate("/");
    window.location.reload();
    console.log("logout successfully");
  };
  return (
    <div class="container">
      <button
        class="btn btn-primary"
        onClick={signOut}
        style={{ backgroundColor: "#2924a6" }}
      >
        Logout
      </button>
      <ToastContainer />
    </div>
  );
};

export default Logout;
