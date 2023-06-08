import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Card,
  CardContent,
} from "@mui/material";
const ExperienceData = (props) => {
  let jobBullets = props.data.experienceLines;

  return (
    <Container>
      <Box sx={{ height: "100%", textAlign: "left", color: "white" }}>
        <Typography variant="body1">{props.data.company}</Typography>
        <Typography variant="body1">{props.data.role}</Typography>
        <Typography variant="body1">{props.data.designation}</Typography>
        <Typography variant="body1">{props.data.date}</Typography>
        <List>
          {props.data.experienceLines.map((lines) => {
            return (
              <ListItem key={lines.id} sx={{ color: "white" }}>
                <ListItemText primary={lines.text} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Container>
  );
};

export default ExperienceData;
