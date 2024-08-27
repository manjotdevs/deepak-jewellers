import SignUp from "./components/auth/signUpBtn";
import Button from "./components/ui/button";
import Logout from "./components/auth/logOutBtn";
import LogInBtn from "./components/auth/logInBtn";
import Dialod from "./components/ui/dialog";
import Header from "./components/header/header";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  return (
    <>
    <Header />
      <SignUp />
      <Button type="destroy" children="hi" />
      <Logout />
      <LogInBtn />
      <button onClick={()=>{
        navigate("/home");
      }}>home screan</button>
    </>
  );
}

export default App;
