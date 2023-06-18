import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Index from "./index";
import SourceContent from "./SourceContent";
const Source = () => {
  const navigate = useNavigate();
  const StoredItem = localStorage.getItem("user");
  // useEffect(() => {
  //   if (StoredItem === null) {
  //     navigate("/");
  //   } else {
  //     navigate("/source");
  //   }
  // }, []);
  return (
    <div class="container" style={{ marginTop: "60px" }}>
      {StoredItem === "LoggedIn" ? <SourceContent /> : <Index />}
    </div>
  );
};

export default Source;
