import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const Info = {
      name: userName,
      email: email,
      textArea: textArea,
    };
    localStorage.setItem(userName, "details");
    console.log(Info);
    setEmail("");
    setUserName("");
    setTextArea("");
  };
  return (
    <div style={{ marginTop: "60px" }}>
      <div class="container" style={{ padding: "30px" }}>
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
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="textarea"
              value={textArea}
              rows="3"
              placeholder="write something"
              onChange={(e) => setTextArea(e.target.value)}
            ></textarea>
          </div>
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
