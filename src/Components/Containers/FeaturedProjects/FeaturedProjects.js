// import { Box, Grid, Link } from "@mui/material";
// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import ProjectData from "../../../Json dataFiles/ProjectsData.json";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import { useNavigate } from "react-router";
// const FeaturedProjects = () => {
//   const navigate = useNavigate();
//   const allProjectsRedirect = () => {
//     navigate("/projects");
//   };
//   const cardsData = ProjectData;
//   let UpdatedItems = [];
//   for (let i = 0; i < 6; i++) {
//     const item = cardsData[i];
//     UpdatedItems.push(item);
//   }

//   return (
//     <div>
//       <Box minHeight="100vh" sx={{ backgroundColor: "#9bf8fa" }}>
//         <h1
//           style={{
//             fontWeight: 700,
//             marginTop: "20px",
//             borderBottom: "2px solid black",
//             display: "inline-block",
//           }}
//         >
//           Featured Projects
//         </h1>

//         <Grid container spacing={3} sx={{ justifyContent: "center" }}>
//           {UpdatedItems.map((card) => (
//             <Grid item key={card.id} xs={12} sm={6} md={4}>
//               <Card sx={{ maxWidth: 405, textAlign: "center" }}>
//                 <CardMedia
//                   component="img"
//                   sx={{ height: 240 }}
//                   image="/static/images/cards/paella.jpg"
//                   title="Loading..."
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5">
//                     {card.title}
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       marginTop: "8px",
//                       flexWrap: "wrap",
//                     }}
//                   >
//                     {card.technology.map((item) => (
//                       <Card
//                         sx={{
//                           backgroundColor: "#C5C6C7",
//                           padding: "8px",
//                           marginRight: "8px",
//                           marginBottom: "8px",
//                         }}
//                       >
//                         <Typography key={item.id}>{item.name}</Typography>
//                       </Card>
//                     ))}
//                   </Box>
//                 </CardContent>
//                 <CardActions sx={{ display: "flex", justifyContent: "center" }}>
//                   <Link target="_blank" rel="noreferrer" href={card.git_url}>
//                     Live
//                     <OpenInNewIcon sx={{ fontSize: "medium" }} />
//                   </Link>
//                   <Button size="small">View</Button>
//                   <Link target="_blank" rel="noreferrer" href={card.git_url}>
//                     Github
//                     <OpenInNewIcon sx={{ fontSize: "medium" }} />
//                   </Link>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "10px",
//             paddingBottom: "20px",
//           }}
//         >
//           <Button variant="contained" onClick={allProjectsRedirect}>
//             All Projects
//           </Button>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default FeaturedProjects;

import React from "react";
import ProjectData from "../../../Json dataFiles/ProjectsData.json";
import demoProject from "../../../assets/Images/demoProject.jpg";
import { useNavigate } from "react-router";
const FeaturedProjects = () => {
  const navigate = useNavigate();
  const ViewProjects = () => {
    navigate("/projects");
  };
  const cardsData = ProjectData;
  let UpdatedItems = [];
  for (let i = 0; i < 6; i++) {
    const item = cardsData[i];
    UpdatedItems.push(item);
  }
  return (
    <div>
      <h1
        style={{
          fontWeight: 700,
          marginTop: "20px",
          borderBottom: "2px solid #2924a6",
          display: "inline-block",
          color: "#2924a6",
        }}
      >
        Featured Projects
      </h1>
      <div class="container">
        <div class="row">
          {UpdatedItems.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 col-sm-12 mb-4" key={card.id}>
                <div class="card">
                  <img src={demoProject} class="card-img-top" alt="loading.." />
                  <div class="card-body">
                    <h5 class="card-title" style={{ color: "#2924a6" }}>
                      {card.title}
                    </h5>
                    <p class="card-text">{card.description}</p>
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
      <button type="button" class="btn btn-primary" onClick={ViewProjects}>
        All Project
      </button>
    </div>
  );
};

export default FeaturedProjects;
