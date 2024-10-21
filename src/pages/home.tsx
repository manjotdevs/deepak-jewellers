import Signup from "../auth/signup";
import Login from "../auth/login";
import Logout from "../auth/logout";
import Header from "../components/header/header";
import ThemeToggle from "../theme/themeTongle";

function Home() {
  return (
    <>
      <Header />
      <Signup />
      <br />
      <Login />
      <br />
      <Logout />
      <br />
      <ThemeToggle />
    </>
  );
}

export default Home;
