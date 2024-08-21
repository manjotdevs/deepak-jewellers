import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/config";
import { ID } from "appwrite";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import Modal from "react-modal";

const SignUP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();  // corrected 'navigator' to 'navigate'
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    try {
      const user = await account.create(ID.unique(), email, password, name);
      console.log("User created successfully", user);

      try {
        const session = await account.createEmailPasswordSession(email, password);
        console.log("User logged in successfully", session);
        dispatch(login(session));
        navigate("/home");
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
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Open Sign Up Modal
      </button>

      <Modal isOpen={modalOpen}>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
              Sign Up
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
            />
             <button
              onClick={signup}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
            <button
              onClick={()=>{setModalOpen(false)}}
              className="w-full bg-gray-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Cancle
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUP;
