import React from "react";
import ContactInfo from "./ContactInfo";
import Login from "./Login";
import { Container } from "@mui/material";
const Contactme = () => {
  return (
    <Container minHeight="100vh" sx={{ backgroundColor: "white" }}>
      <Login />
    </Container>
  );
};

export default Contactme;
