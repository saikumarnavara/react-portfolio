// import { Box, Grid, Link, Typography, Button } from "@mui/material";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import ProjectsData from "../../../Json dataFiles/ProjectsData.json";
// const AllProjects = () => {
//   const Data = ProjectsData;
//   return (
//     <Grid container spacing={3} sx={{ justifyContent: "center" }}>
//       {Data.map((card) => (
//         <Grid item key={card.id} xs={12} sm={6} md={4}>
//           <Card sx={{ maxWidth: 405, textAlign: "center" }}>
//             <CardMedia
//               component="img"
//               sx={{ height: 240 }}
//               image="/static/images/cards/paella.jpg"
//               title="Loading..."
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5">
//                 {card.title}
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   marginTop: "8px",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 {card.technology.map((item) => (
//                   <Card
//                     sx={{
//                       backgroundColor: "#C5C6C7",
//                       padding: "8px",
//                       marginRight: "8px",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <Typography key={item.id}>{item.name}</Typography>
//                   </Card>
//                 ))}
//               </Box>
//             </CardContent>
//             <CardActions sx={{ display: "flex", justifyContent: "center" }}>
//               <Link target="_blank" rel="noreferrer" href={card.git_url}>
//                 Live
//                 <OpenInNewIcon sx={{ fontSize: "medium" }} />
//               </Link>
//               <Button size="small">View</Button>
//               <Link target="_blank" rel="noreferrer" href={card.git_url}>
//                 Github
//                 <OpenInNewIcon sx={{ fontSize: "medium" }} />
//               </Link>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default AllProjects;

import React from "react";
import ProjectsData from "../../../Json dataFiles/ProjectsData.json";
import demoProject from "../../../assets/Images/demoProject.jpg";

const AllProjects = () => {
  const ProjectsJsonData = ProjectsData;
  return (
    <div style={{ marginTop: "50px" }}>
      <div class="container">
        <h1
          style={{
            fontWeight: 700,
            marginTop: "20px",
            borderBottom: "2px solid #2924a6",
            display: "inline-block",
            color: "#2924a6",
            marginBottom: "10px",
          }}
        >
          Projects
        </h1>
        <div class="row">
          {ProjectsJsonData.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">
                  <img src={demoProject} class="card-img-top" alt="loading.." />
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2924a6" }}>
                      {card.title}
                    </h5>
                    <p class="card-text">{card.description}</p>
                  </div>
                  <div
                    class="card-body d-flex"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {card.technology.map((item) => {
                      return (
                        <div
                          key={item.id}
                          style={{
                            display: "inline-block",
                            marginRight: "10px",
                            backgroundColor: "#ccc",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                        >
                          <p class="card-text">{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div class="card-footer">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <a
                                href={card.git_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Live
                              </a>
                            </li>
                            <li class="list-inline-item mr-3">
                              <a
                                href={card.git_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                View
                              </a>
                            </li>
                            <li class="list-inline-item">
                              <a
                                href={card.git_url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Github
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
