// import React, { useState } from "react";
// import { AppBar, Toolbar } from "@mui/material";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Box,
//   Container,
// } from "@mui/material";
// import { Menu as MenuIcon, Home as HomeIcon } from "@mui/icons-material";
// import SchoolIcon from "@mui/icons-material/School";
// import { Link } from "react-router-dom";

// const SideNavBar = () => {
//   return (
//     <Container>
//       <Box sx={{ position: "fixed", top: "0px", left: "0", zIndex: 999 }}>
//         <ListItem button component={Link} to="/">
//           <SchoolIcon sx={{ fontSize: "46px", color: "#66FCF1" }} />
//         </ListItem>
//       </Box>
//     </Container>
//   );
// };

// const HomeRedirectIcon = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <Container>
//       <IconButton
//         onClick={toggleDrawer}
//         sx={{ position: "fixed", top: "0", right: "0", zIndex: 999 }}
//       >
//         <MenuIcon sx={{ fontSize: "38px", color: "#66FCF1" }} />
//       </IconButton>
//       <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
//         <List sx={{ color: "#66FCF1", fontWeight: 700 }}>
//           <ListItem button component={Link} to="/">
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Home"></ListItemText>
//           </ListItem>
//           <ListItem button component={Link} to="/projects">
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Projects"></ListItemText>
//           </ListItem>
//           <ListItem button component={Link} to="/about">
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="About"></ListItemText>
//           </ListItem>
//           <ListItem button component={Link} to="/profile">
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Profile"></ListItemText>
//           </ListItem>
//           <ListItem button component={Link} to="/contactme">
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Contact Me"></ListItemText>
//           </ListItem>
//         </List>
//       </Drawer>
//     </Container>
//   );
// };
// const FixedNavBar = () => {
//   return (
//     <AppBar sx={{ backgroundColor: "#1F2833", marginBottom: "20px" }}>
//       <Toolbar>
//         <SideNavBar />
//         <HomeRedirectIcon />
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default FixedNavBar;

import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { NavLink } from "react-router-dom";
const Drawer = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
          <NavLink className="nav-link" exact to="/" activeClassName="active">
            <img src={SchoolIcon} alt="" width="30" height="24" />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav" style={{ alignItems: "center" }}>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/projects"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/profile"
                  activeClassName="active"
                >
                  Profile
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/contactme"
                  activeClassName="active"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
