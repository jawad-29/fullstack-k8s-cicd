import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Full Stack CI/CD with Docker & K8s</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

