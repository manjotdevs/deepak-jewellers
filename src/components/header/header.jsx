import React, { useState, useEffect } from "react";
import Button from "../ui/button";
import LogInBtn from "../auth/logInBtn";
import SignUpBtn from "../auth/signUpBtn";
import { account } from "../../appwrite/config";
import { GrSearch } from "react-icons/gr";
import Input from "../ui/input";
import { useSelector } from "react-redux";
function Header() {
  const [status, setStatus] = useState(null);

  const loginCheck = async () => {
    try {
      const user = await account.get();
      setStatus(user.status);
    } catch (err) {
      setStatus(false);
    }
  };

  useEffect(() => {
    loginCheck();
  }, [status]);

  return (
    <>
      <div className="w-full h-24 bg-gray-950 p-5 flex flex-1">
        <div className="flex flex-1 w-[20%] space-x-5">
          <img src="logo.png" alt="" className="w-12 h-12" />
          <h1>Deepak Jewellers</h1>
        </div>
        <div className="flex flex-1 w-[60%] justify-center text-center">
          <Button
            style="custom"
            className="bg-orange-50 outline-none h-12 rounded-l-md text-gray-800"
          >
            <GrSearch size={28} />
          </Button>
          <Input
            type="text"
            roundness="r20%"
            className="w-full"
            style="primary"
            placeholder="Search for Products"
          />
        </div>
        <div className="w-[20%] flex flex-1 justify-end text-end ">
          {status ? (
            <div>
              <p>You are logged in</p>
            </div>
          ) : (
            <div>
              <LogInBtn />
              <SignUpBtn />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
