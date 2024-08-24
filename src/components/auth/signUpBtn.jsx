import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/config";
import { ID } from "appwrite";
import Dialog from "../ui/dialog";
import Button from "../ui/buttion";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    try {
      const user = await account.create(ID.unique(), email, password, name);
      console.log("User created successfully", user);
      // Log the user
      try {
        const session = await account.createEmailPasswordSession(
          email,
          password
        );
        console.log("User logged in successfully", session);
        //TODO: need to add user to redux store
        navigate("/home");
        {i(!session)}
      } catch (err) {
        alert("Failed to log in: " + err.message);
        navigate("/");
      }
    } catch (err) {
      console.error("Failed to create user", err);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setModal(true)}>
        Sign in
      </Button>

      <Dialog
        isOpen={modal}
        className="flex justify-center items-center min-h-screen bg-gray-100"
        children={
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl text-white font-bold text-left pb-8">
              Sign Up
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-6 border  text-cyan-900 border-gray-300 rounded-lg"
            />
            <div className="flex justify-between space-x-4 pb-4">
              <Button
                type="destroy-active"
                className="font-bold w-1/2"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>

              <Button type="primary" className="w-1/2" onClick={signup}>
                Sign up
              </Button>
            </div>
          </div>
        }
      />
    </>
  );
};

export default SignUp;
