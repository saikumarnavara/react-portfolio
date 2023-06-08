import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Screens/Home";
import Projects from "../Components/Screens/Projects";
import Profile from "../Components/Screens/Profile";
import About from "../Components/Screens/About";
import Contact from "../Components/Screens/Contact";
const route = (
  <React.Fragment>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Projects />} path="/projects" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<About />} path="/about" />
      <Route element={<Contact />} path="/contactme" />
    </Routes>
  </React.Fragment>
);

export default route;
