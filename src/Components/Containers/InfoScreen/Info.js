import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import SocialMediaApps from "../../Containers/SocialMedia/ScoialMediaApps";
import "@fontsource/kalam";

const NameInfo = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/profile");
  };
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ textAlign: "left", marginLeft: "0px", marginBottom: "10px" }}
      >
        <Box
          sx={{
            textAlign: "left",
            marginTop: "62px",
            color: "#C5C6C7",
          }}
        >
          <Typography variant="h2" color="#66FCF1" style={Styles.nameFont}>
            I'm Sai Kumar
          </Typography>
          <Typography variant="h4">FrontEnd Developer</Typography>
        </Box>
        <SocialMediaApps />
        <Button
          onClick={onClickHandler}
          variant="contained"
          sx={{ backgroundColor: "#45A29E", marginTop: "10px" }}
        >
          More About SaiKumar
        </Button>
      </Container>
    </>
  );
};
const Styles = {
  SocialMedialLogoColor: {
    color: "#66FCF1",
    fontSize: "36px",
  },
  nameFont: {
    fontFamily: "kalam",
    fontWeight: 700,
  },
};
export default NameInfo;
