import React from "react";
import Button from "../ui/buttion";
import { account } from "../../appwrite/config";

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      alert("You have been logged out.");
      // Redirect or update state after logout
      window.location.href = "/login"; // Redirect to login page or update state
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
