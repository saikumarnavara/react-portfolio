// import { Box, Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import TechnicalSkillData from "../../../Json dataFiles/TechnicalSkillData.json";
// const TechnicalSkills = () => {
//   const jsonDataa = TechnicalSkillData;
//   return (
//     <Container>
//       <Typography
//         variant="h3"
//         sx={{
//           textAlign: "center",
//           color: "#66FCF1",
//           borderBottom: "2px solid black",
//           marginBottom: "30px",
//         }}
//       >
//         Technical Skills
//       </Typography>

//       <Grid container spacing={3}>
//         {jsonDataa.map((items) => (
//           <Grid xs={12} sm={6} md={6} lg={6} xl={4} key={items.id}>
//             <Card
//               sx={{
//                 minWidth: 275,
//                 marginLeft: 8,
//                 marginRight: 8,
//                 marginBottom: "16px",
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   sx={{ fontFamily: "poppins", textAlign: "left" }}
//                   variant="h4"
//                 >
//                   {items.technologys}
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "left",
//                     marginTop: "8px",
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   {items.skills.map((item) => {
//                     return (
//                       <Card
//                         sx={{
//                           backgroundColor: "#C5C6C7",
//                           padding: "8px",
//                           marginRight: "8px",
//                           marginBottom: "8px",
//                         }}
//                       >
//                         <Typography key={item.id}>{item.tech}</Typography>
//                       </Card>
//                     );
//                   })}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default TechnicalSkills;

import React from "react";
import TechnicalSkillData from "../../../Json dataFiles/TechnicalSkillData.json";

const TechnicalSkills = () => {
  const jsonDataa = TechnicalSkillData;
  return (
    <div>
      <div class="container">
        <h1
          style={{
            fontWeight: 700,
            marginTop: "20px",
            borderBottom: "2px solid black",
            display: "inline-block",
            color: "black",
            marginBottom: "10px",
          }}
        >
          Technical Skills
        </h1>
        <div class="row justify-content-center">
          {jsonDataa.map((card) => {
            return (
              <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card" key={card.id}>
                  <div class="card-body">
                    <h5 class="card-title">{card.technologys}</h5>
                  </div>
                  <div
                    class="card-body d-flex"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {card.skills.map((item) => {
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
                          <p class="card-text">{item.tech}</p>
                        </div>
                      );
                    })}
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

export default TechnicalSkills;
