import SignUP from "./components/auth/signUpBtn"
import Button from "./components/ui/buttion"
import LogoutButton from "./components/auth/logInBtn"
function App() {
  return (
    <>
      <h1>Deepak jewellers</h1>
      <SignUP />
      <Button type="destroy" children="hi" />
      <LogoutButton />
      
  </>
  )
}

export default App
