import SignUp from "./components/auth/signUpBtn";
import Button from "./components/ui/button";
import Logout from "./components/auth/logOutBtn";
import LogInBtn from "./components/auth/logInBtn";
import Dialod from "./components/ui/dialog";
import Header from "./components/header/header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from './components/ui/card'
import Upload from "./components/storage/upload";

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
      <Upload />
      
      {/* Use the userData variable in the JSX */}
      <p>{userData ? userData.name : "No user data available"}</p>
      <Card 
      image="ring.jpg"
      title="Ring"
      content="Ring card image and text"
      price="$100"
      />
    </>
  );
}

export default App;
