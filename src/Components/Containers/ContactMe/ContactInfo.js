// import {
//   Card,
//   Grid,
//   CardContent,
//   Typography,
//   Container,
//   Box,
// } from "@mui/material";
// import React from "react";
// import ContactInfoData from "../../../Json dataFiles/ContactInfoData.json";
// import SocialMediaApps from "../../Containers/SocialMedia/ScoialMediaApps";
// const ContactInfo = () => {
//   const info = ContactInfoData;
//   return (
//     <Container>
//       <Grid
//         container
//         spacing={3}
//         sx={{ marginTop: "100px", display: "flex", flexDirection: "coloumn" }}
//       >
//         {info.map((item) => {
//           return (
//             <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
//               {item.details.map((info) => {
//                 return (
//                   <Card
//                     sx={{
//                       maxWidth: 500,
//                       textAlign: "center",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     <CardContent>
//                       <Typography>{info}</Typography>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </Grid>
//           );
//         })}
//       </Grid>
//       <SocialMediaApps />
//     </Container>
//   );
// };

// export default ContactInfo;

import React from "react";
import ContactInfoData from "../../../Json dataFiles/ContactInfoData.json";
import SocialMediaApps from "../../Containers/SocialMedia/ScoialMediaApps";
const ContactInfo = () => {
  const UserInfo = ContactInfoData;
  return (
    <div>
      <div class="container" style={{ marginTop: "60px" }}>
        <h1
          style={{
            fontWeight: 700,
            marginTop: "20px",
            borderBottom: "2px solid black",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h1>
        <div class="col">
          {UserInfo.map((card) => {
            return (
              <div key={card.id}>
                {card.details.map((item, index) => {
                  return (
                    <div
                      class="card bg-primary text-white"
                      key={index}
                      style={{ marginBottom: "10px" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">{item}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
