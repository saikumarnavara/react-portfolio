import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";
import JobExpData from "../../../Json dataFiles/JobExpData.json";
import ExperienceData from "./ExperienceData";
const Experience = () => {
  let data = JobExpData;

  const [selectedCompany, setSelectedCompany] = useState("tcs");
  let companyData = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i].company === selectedCompany) {
      companyData = data[i];
      break;
    }
  }
  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };
  const selectedCompColor = {
    color: "#2924a6",
    borderLeft: "3px solid #2924a6",
    paddingLeft: "9px",
    marginLeft: "-3px",
  };
  const ListItemStyle = {
    color: "inherit",
    paddingLeft: "12px",
  };

  const renderExp = () => {
    switch (selectedCompany) {
      case "tcs":
        return <ExperienceData data={companyData} />;
      case "wipro":
        return <ExperienceData data={companyData} />;
      case "rise":
        return <ExperienceData data={companyData} />;
      default:
        return null;
    }
  };
  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#2924a6",
          borderBottom: "2px solid #2924a6",
        }}
      >
        Experience
      </Typography>
      <Box sx={{ display: "flex" }}>
        <List>
          <ListItem
            button
            onClick={() => handleCompanyClick("tcs")}
            selected={selectedCompany === "tcs"}
            sx={selectedCompany === "tcs" ? selectedCompColor : {}}
          >
            <ListItemText primary="Tcs" sx={ListItemStyle} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleCompanyClick("wipro")}
            selected={selectedCompany === "wipro"}
            sx={selectedCompany === "wipro" ? selectedCompColor : {}}
          >
            <ListItemText primary="Wipro" sx={ListItemStyle} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleCompanyClick("rise")}
            selected={selectedCompany === "rise"}
            sx={selectedCompany === "rise" ? selectedCompColor : {}}
          >
            <ListItemText primary="Rise" sx={ListItemStyle} />
          </ListItem>
        </List>
        <Box ml={6}>{renderExp()}</Box>
      </Box>
    </Container>
  );
};

export default Experience;
