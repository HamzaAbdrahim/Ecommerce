import { Route , Routes } from "react-router-dom"
import About from "../componants/About"
const Routers = () => {
  return (
    <Routes>
        <Route path="/about" element={<About />}/>
    </Routes>
  )
}

export default Routers