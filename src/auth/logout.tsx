import { account } from "@/lib/appwriteConf";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/storage/userSlice";

const Logout: React.FC = () => {
  const dispatch = useDispatch<any>();
  const LogoutUser = async (): Promise<void> => {
    try {
      await account.deleteSession("current");
      alert("You have been logged out.");
      dispatch(logout());
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    }
  };

  return <Button onClick={LogoutUser}>Logout</Button>;
};

export default Logout;
