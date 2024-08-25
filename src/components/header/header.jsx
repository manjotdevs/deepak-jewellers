import React from "react";
import Button from "../ui/buttion";
import { account } from "../../appwrite/config";
import { GrSearch } from "react-icons/gr";
import Input from "../ui/input";

function Header() {
  return (
    <>
      <div className="w-full h-24 bg-gray-950 p-5 flex flex-1">
        <div className="flex flex-1">
          <img src="logo.png" alt="" className="w-12 h-12" />
          <h1>Deepak Jewellers</h1>
        </div>
        <div className="flex flex-1">
          <Button
            type="custom"
            className="bg-orange-50 h-12 rounded-l-md  text-gray-800 "
          >
            <GrSearch size={28} />
          </Button>
          <Input
            type="text"
            roundness="r20%"
            style="primary"
            placeholder="Search for Products"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
