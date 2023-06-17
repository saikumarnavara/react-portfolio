import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Screens/Home";
import Projects from "../Components/Screens/Projects";
import Profile from "../Components/Screens/Profile";
import Contact from "../Components/Screens/Contact";
import SignIn from "../Components/Containers/Oauth/SignIn";
import Source from "../Components/Containers/Source/Source";

const route = (
  <React.Fragment>
    <Routes>
      <Route element={<Home />} exact path="/" />
      <Route element={<Projects />} exact path="/projects" />
      <Route element={<Profile />} exact path="/profile" />
      <Route path="/login" element={<SignIn />} />
      <Route element={<Contact />} exact path="/contactme" />
      <Route element={<Source />} exact path="/source" />
    </Routes>
  </React.Fragment>
);

export default route;
