import React from "react";
import Footer from "../Containers/Footer/Footer";
import AboutUser from "../Containers/InfoScreen/AboutUser";
import Experience from "../Containers/InfoScreen/Experience";
import TechnicalSkills from "../Containers/InfoScreen/TechnicalSkills";
import Education from "../Containers/InfoScreen/Education";
import { Box } from "@mui/material";
const Profile = () => {
  return (
    <Box minHeight="100vh" sx={{ backgroundColor: "#1F2833" }}>
      <AboutUser />
      <Experience />
      <TechnicalSkills />
      <Education />
      <Footer />
    </Box>
  );
};

export default Profile;
