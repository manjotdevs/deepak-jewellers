import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import Dialog from "../ui/dialog";
import { account } from "../../appwrite/config";

function LogInBtn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");

  const LogUserIn = async (e) => {
    e.preventDefault();
    try {
      const user = await account.createEmailPasswordSession(email, password);
      console.log("User logged in successfully", user);
      //window.location.reload();
      // TODO: Redirect to dashboard or home page
      setModal(false);
    } catch (error) {
      setError(error.message);
      console.error("Failed to log in:", error.message);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setModal(true)}>
        Login
      </Button>

      <Dialog
        isOpen={modal}
        className="flex justify-center items-center min-h-screen"
        children={
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl text-white font-bold text-left pb-8">
              Log in
            </h2>
            {error && <p className="text-red-600">{error}</p>}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-6 border text-cyan-900 border-gray-300 rounded-lg"
            />
            <div className="flex justify-between space-x-4 pb-4">
              <Button
                style="destroy-active"
                className="font-bold w-1/2"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>

              <Button style="primary" className="w-1/2" onClick={LogUserIn}>
                Log in
              </Button>
            </div>
            <p className="text-white text-center opacity-50">--or--</p>
            <Button
             style="custom"
              className="w-full my-2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Google
            </Button>

            <Button
              style="custom"
              className="w-full my-2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Apple
            </Button>

            <Button
              style="custom"
              className="w-full my-2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Facebook
            </Button>
          </div>
        }
      />
    </>
  );
}

export default LogInBtn;
