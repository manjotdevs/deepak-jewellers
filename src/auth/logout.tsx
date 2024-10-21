import { account } from "@/lib/appwriteConf";
import { Button } from "@/components/ui/button";

function Logout() {
  const LogoutUser = async () => {
    try {
      await account.deleteSession("current");
      alert("You have been logged out.");
      //TODO: Redirect or update state after logout
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    }
  };

  return <Button onClick={LogoutUser}>Logout</Button>;
}

export default Logout;
