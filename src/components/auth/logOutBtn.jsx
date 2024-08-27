import React from "react";
import Button from "../ui/button";
import { account } from "../../appwrite/config";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      alert("You have been logged out.");
      navigate("/");
      window.location.reload();

      //TODO: Redirect or update state after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <Button
    type="primary"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn
