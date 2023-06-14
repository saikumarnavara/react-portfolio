import React from "react";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const ScoialMediaApps = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      <Grid item xs={1.2}>
        <Link target="_blank" rel="noreferrer" href="https://www.youtube.com">
          <YouTubeIcon style={Styles.SocialMedialLogoColor} />
        </Link>
      </Grid>
      <Grid item xs={1.2}>
        <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com">
          <LinkedInIcon style={Styles.SocialMedialLogoColor} />
        </Link>
      </Grid>
      <Grid item xs={1.2}>
        <Link target="_blank" rel="noreferrer" href="https://www.instagram.com">
          <InstagramIcon style={Styles.SocialMedialLogoColor} />
        </Link>
      </Grid>
      <Grid item xs={1.2}>
        <Link target="_blank" rel="noreferrer" href="https://www.github.com">
          <GitHubIcon style={Styles.SocialMedialLogoColor} />
        </Link>
      </Grid>
    </Grid>
  );
};
const Styles = {
  SocialMedialLogoColor: {
    color: "#2924a6",
    fontSize: "36px",
  },
  nameFont: {
    fontFamily: "kalam",
    fontWeight: 700,
  },
};
export default ScoialMediaApps;
