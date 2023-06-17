import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Logout from "../Oauth/Logout";
const Source = () => {
  const navigate = useNavigate();
  const StoredItem = localStorage.getItem("user");
  useEffect(() => {
    if (StoredItem === null) {
      navigate("/");
    } else {
      navigate("/source");
    }
  }, []);

  return (
    <div class="container" style={{}}>
      <h1>Will get back to you soon</h1>
      <button>hdjdg</button>
      <Logout />
    </div>
  );
};

export default Source;
