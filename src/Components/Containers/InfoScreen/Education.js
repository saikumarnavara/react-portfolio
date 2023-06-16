// import {
//   Box,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import EducationDetails from "../../../Json dataFiles/EducationDetails.json";
// const Education = () => {
//   const EduDetails = EducationDetails;
//   return (
//     <Container>
//       <Box>
//         <Typography
//           variant="h3"
//           sx={{
//             textAlign: "center",
//             color: "#66FCF1",
//             borderBottom: "2px solid black",
//             marginBottom: "30px",
//           }}
//         >
//           Education
//         </Typography>
//       </Box>
//       <Grid Container spacing={2}>
//         {EduDetails.map((item) => (
//           <Grid xs={12} sm={6} md={6} lg={6} xl={4} key={item.id}>
//             <Card
//               sx={{
//                 minWidth: 575,
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
//                   {item.college_name}
//                 </Typography>
//                 <Typography
//                   sx={{ fontFamily: "poppins", textAlign: "left" }}
//                   variant="h4"
//                 >
//                   {item.passedout}
//                 </Typography>
//                 <Card
//                   sx={{
//                     backgroundColor: "#C5C6C7",
//                     padding: "8px",
//                     marginRight: "8px",
//                     marginBottom: "8px",
//                   }}
//                 >
//                   <Typography>percentage - {item.percentage}</Typography>
//                 </Card>
//                 <Typography
//                   sx={{ fontFamily: "poppins", textAlign: "left" }}
//                   variant="h4"
//                 >
//                   {item.Branch}
//                 </Typography>
//                 <Typography
//                   sx={{ fontFamily: "poppins", textAlign: "left" }}
//                   variant="h4"
//                 >
//                   {item.Address}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Education;

import React from "react";
import EducationDetails from "../../../Json dataFiles/EducationDetails.json";
import EducationAvatar from "../../../assets/Images/EducationAvatar.jpg";
import "../FeaturedProjects/FeaturedProject.css";
const Education = () => {
  const EduDetails = EducationDetails;
  return (
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
        Education
      </h1>
      <div class="row justify-content-cneter">
        {EduDetails.map((card) => {
          return (
            <div class="col-md-4 mb-4">
              <div class="card shadow my-card" key={card.id}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={EducationAvatar}
                    alt="..."
                    style={{
                      height: "auto",
                      width: "200px",
                      paddingTop: "10px",
                    }}
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "#2924a6" }}>
                    {card.college_name}
                  </h5>
                  <p>{card.degree}</p>
                  <p>{card.passedout}</p>
                  <p
                    style={{
                      backgroundColor: "#ccc",
                      padding: "6px",
                      textAlign: "center",
                    }}
                  >
                    {card.percentage}
                  </p>
                  <p>{card.Branch}</p>
                  <p>{card.Address}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
