import { Route , Routes } from "react-router-dom"
import Login from "../componants/Login"
import Navbar from "../componants/Navbar"
import Hero from "../componants/Hero"
import About from "../componants/About"
import Products from "../componants/Products"
import Contact from "../componants/Contact"
import Fqo from "../componants/Fqo"
import Footer from "../componants/Footer"
import Soppingcart from "../componants/Soppingcart"
const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={
    <div>
    <Navbar />
    <Hero />
    <About />
    <Products />
    <Contact />
    <Fqo />
    <Footer />
    </div>} />
    <Route path="/login" element={<Login />} />
    <Route path="/Soppingcart" element={<Soppingcart />} />
    </Routes>
  )
}

export default Routers