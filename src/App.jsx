import SignUp from "./components/auth/signUpBtn";
import Button from "./components/ui/button";
import Logout from "./components/auth/logOutBtn";
import LogInBtn from "./components/auth/logInBtn";
import Dialod from "./components/ui/dialog";
import Header from "./components/header/header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();

  // Use useSelector at the top level
  const userData = useSelector((state) => state.auth.userData);

  return (
    <>
      <Header />
      <SignUp />
      <Button type="destroy" children="hi" />
      <Logout />
      <LogInBtn />
      <button onClick={() => navigate("/home")}>Home Screen</button>
      
      {/* Use the userData variable in the JSX */}
      <p>{userData ? userData.name : "No user data available"}</p>
    </>
  );
}

export default App;
