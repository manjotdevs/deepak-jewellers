import React from 'react'
import LogOutBtn from "../components/auth/logOutBtn"
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header'

function Home() {
  const navigate = useNavigate()
  return (
    <>
    <Header />
    <LogOutBtn />
    <button onClick={()=>{navigate("/")}}>back</button>
    </>
  )
}

export default Home