import React, { useState } from "react";
import authService from "../appwrite/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await authService.createAccount({email, password, name});
      result
        .then(function (ress) {
          console.log("sucress", ress);
        })
        .catch((err) => {
          console.log("error", err);
        });
      console.log("User logged in:", result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </>
  );
};

export default Login;
