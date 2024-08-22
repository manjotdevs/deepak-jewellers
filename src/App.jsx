import SignUp from "./components/auth/signUpBtn";
import Button from "./components/ui/buttion";
import Logout from "./components/auth/logOutBtn";
import Loading from "./components/loading";
import LogInBtn from "./components/auth/logInBtn";
import Dialod from "./components/ui/dialog";
function App() {
  const a = 1
  return (
    <>
      <h1>Deepak jewellers</h1>
      <SignUp />
      <Button type="destroy" children="hi" />
      <Logout />
      <LogInBtn />
      <Dialod/>
    </>
  );
}

export default App;
