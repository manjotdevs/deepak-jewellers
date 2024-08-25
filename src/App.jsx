import SignUp from "./components/auth/signUpBtn";
import Button from "./components/ui/buttion";
import Logout from "./components/auth/logOutBtn";
import LogInBtn from "./components/auth/logInBtn";
import Dialod from "./components/ui/dialog";
import Header from "./components/header/header";
function App() {
  const a = 1
  return (
    <>
    <Header />
      <SignUp />
      <Button type="destroy" children="hi" />
      <Logout />
      <LogInBtn />
      <Dialod/>
    </>
  );
}

export default App;
