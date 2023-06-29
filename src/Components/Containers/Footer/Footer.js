import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SocialMediaApps from "../SocialMedia/ScoialMediaApps";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container minHeight="100vh" sx={{ backgroundColor: "lightgray" }}>
      <Box>
        <BottomNavbar />
        <div style={{ marginLeft: "38%" }}>
          <SocialMediaApps />
        </div>
        <div>
          <Typography
            variant="body2"
            color="black"
            align="center"
            sx={{ p: 2 }}
          >
            Copyright © {new Date().getFullYear()}{" "}
            <Link to="/profile" style={{ color: "#2924a6" }}>
              SaiKumar Portfolio{" "}
            </Link>
            ,Inc All rights reserved.
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Footer;
