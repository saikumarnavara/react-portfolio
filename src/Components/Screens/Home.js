import React from "react";
import NameInfo from "../Containers/InfoScreen/Info";
import FeaturedProjects from "../Containers/FeaturedProjects/FeaturedProjects";
import Footer from "../Containers/Footer/Footer";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <Box minHeight="100vh" sx={{ backgroundColor: "#1F2833" }}>
      <NameInfo />
      <FeaturedProjects />
      <Footer />
    </Box>
  );
};
export default Home;
