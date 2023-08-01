import { Route , Routes } from "react-router-dom"
import Login from "../componants/Login"
import Navbar from "../componants/Navbar"
const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Routers