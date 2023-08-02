import { Route , Routes } from "react-router-dom"
import Login from "../componants/Login"
import Navbar from "../componants/Navbar"
import Hero from "../componants/Hero"
const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<div><Navbar /><Hero /></div>} />
    <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Routers