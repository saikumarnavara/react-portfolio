import React from "react";
import "./App.css";
import "@fontsource/poppins";
import route from "./routes/index";
import Drawer from "./Components/Containers/Drawer/Drawer";
function App() {
  return (
    <div className="App">
      <Drawer />
      {route}
    </div>
  );
}

export default App;
