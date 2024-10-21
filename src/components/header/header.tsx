import { useState, useEffect } from "react";
import { account } from "@/lib/appwriteConf";
import { Input } from "../ui/input";
import Signup from "@/auth/signup";
import Login from "@/auth/login";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Color } from "@/theme/colors";
import { IoSearchSharp } from "react-icons/io5"; 

function Header() {
  const [status, setStatus] = useState(false);

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
    <div className="w-full h-20 flex items-center justify-between px-8 bg-slate-200 dark:bg-gray-900">
      {/* Left Section: Logo and Title */}
      <div className="flex items-center space-x-4 w-[30%]">
        <Avatar>
          <AvatarImage src="logo.jpg" />
        </Avatar>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">
          Deepak Jewellers
        </p>
      </div>

      {/* Middle Section: Search Input */}
      <div className="w-[40%]">
        <Input
          type="text"
          placeholder="Search"
          className="w-full h-[40px] p-3 border-2 border-gray-300 rounded-3xl"
        />
      </div>

      {/* Right Section: Button */}
      <div className="flex items-center w-[30%] justify-end">
        {status ? (
          "You are login"
        ) : (
          <>
            <Login />
            <Signup />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
