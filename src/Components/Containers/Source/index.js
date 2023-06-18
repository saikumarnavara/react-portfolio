import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("Please Login to get SourceCode.. HappyCoding..", {
        position: "top-right",
        type: "info",
        theme: "colored",
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div class="container" style={{ marginTop: "50px", color: "#2924a6" }}>
      <center>Hi There, If you want the source code Please Login </center>
      <ToastContainer />
    </div>
  );
};

export default Index;
