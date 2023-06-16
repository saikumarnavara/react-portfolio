import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const BottomNavbar = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
    >
      <Link
        to="/"
        style={{
          TextDecoration: "none",
          marginRight: "20px",
          color: "#2924a6",
        }}
      >
        <Typography variant="h6">Home</Typography>
      </Link>
      <Link
        to="/projects"
        style={{
          TextDecoration: "none",
          marginRight: "20px",
          color: "#2924a6",
        }}
      >
        <Typography variant="h6">Projects</Typography>
      </Link>
      <Link
        to="/about"
        style={{
          TextDecoration: "none",
          marginRight: "20px",
          color: "#2924a6",
        }}
      >
        <Typography variant="h6">About</Typography>
      </Link>
      <Link
        to="/profile"
        style={{
          TextDecoration: "none",
          color: "#2924a6",
          marginRight: "20px",
        }}
      >
        <Typography variant="h6">Profile</Typography>
      </Link>
      <Link
        to="/contactme"
        style={{ TextDecoration: "none", color: "#2924a6" }}
      >
        <Typography variant="h6">Contact Me</Typography>
      </Link>
    </div>
  );
};

export default BottomNavbar;
