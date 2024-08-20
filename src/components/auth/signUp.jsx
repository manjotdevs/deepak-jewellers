import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account} from "../../appwrite/config";
import { ID } from "appwrite";

const SignUP= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigator = useNavigate()

  const signup = async (e) => {
    e.preventDefault();
    await account
      .create(ID.unique(), email, password, name)
      .then(function (ress) {
        console.log("User created successfully", ress);
        navigator("/home")
      })
      .catch(function (err) {
        console.error("Failed to create user", err);
      });
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
      <button onClick={signup}>Register</button>
    </>
  );
};

export default SignUP;
