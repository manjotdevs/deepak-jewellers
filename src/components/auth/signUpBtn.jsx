import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import { account } from "../../appwrite/config";
import { ID } from "appwrite";
import Dialog from "../ui/dialog";
import Button from "../ui/button";
import Input from "../ui/Input";

const SignUpBtn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const signup = async (e) => {
    e.preventDefault();
    try {
      // Create a new user account in Appwrite
      const user = await account.create(ID.unique(), email, password, name);
      console.log(user);
      // Dispatch the login action with the appropriate payload structure
      dispatch(login({ userData: user }));

      console.log("User created successfully", user);

      // Log user
      const session = await account.createEmailPasswordSession(email, password);
      console.log("User logged in successfully", session);

      //navigate("/home");

      //window.location.reload();
    } catch (err) {
      console.error("Failed to create user", err);
      alert("Failed to sign up: " + err.message);
    }
  };

  return (
    <>
      <Button style="primary" onClick={() => setModal(true)}>
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
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-6 border  text-cyan-900 border-gray-300 rounded-lg"
            />
            <div className="flex justify-between space-x-4 pb-4">
              <Button
                style="destroy-active"
                className="font-bold w-1/2"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>

              <Button style="primary" className="w-1/2" onClick={signup}>
                Sign up
              </Button>
            </div>
          </div>
        }
      />
    </>
  );
};

export default SignUpBtn;
