import { useState } from "react"
import assets from "../assets/imges"
import styles from "../style"
import Inbutton from "./Inbutton"
import Inputfiled from "./Inputfiled"
import {Link} from "react-router-dom"

const Login = () => {
  const [toggol , settoggol] = useState(false)

  function toggolbutton() {
    settoggol(prev => (!prev))
  }
  return (
    <div>
    <div className={`p-12 ${styles.flexCenter} gap-48`}>
      <div>
      <img src={assets.loginbg} alt="loginbg" className="w-[40rem] h-[45rem] rounded-[1.8125rem]" />
      </div>

      <div className="flex flex-col -mt-10">
      <div className={`${styles.flexitems} gap-4`}>
            <img src={assets.logo} alt="logo" />
            <h1 className='text-primary font-Sue text-4xl not-italic font-normal leading-[normal] capitalize'>OnlyBrownies</h1>
        </div>
        <div className="rounded-[2.0625rem] bg-[#f8eddd] px-4 gap-10 py-3  mt-12 mb-[3.25rem] flex items-center justify-center">
          <Link>
          <p 
          onClick={toggolbutton}
          className={`${toggol ? "" : "text-white bg-[#9E896A]"} py-3 px-14 rounded-[2.0625rem] text-xl not-italic font-normal leading-[normal]${styles.flexCenter}`}>Login</p></Link>
          <Link>
          <p 
          onClick={toggolbutton}
          className={`${toggol ? "text-white bg-[#9E896A]" : ""} text-[#9E896A]  py-3 px-14 rounded-[2.0625rem] text-xl not-italic font-normal leading-[normal]${styles.flexCenter}`}>Register</p></Link>
        </div>
        <form action="" method="post" className="flex flex-col">
          <Inputfiled 
          titel = {toggol?"Email Address":"User name"}
          style = "mb-8"
          placeholder ={toggol?"Enter your Email Address":"Enter your User name"} />
          {toggol ? 
          <Inputfiled 
          titel = "Password"
          style = "mb-8"
          placeholder = "Enter your Password"/>:"" }
          <Inputfiled 
          titel = "User name"
          style = "mb-8"
          placeholder = "Enter your User name"/>
        {toggol ? "" :<div className={`${styles.flexBetween} mt-6 mb-14`}>
          <div className="flex items-center gap-[0.37rem]">
          <input type="checkbox" name="remember" id="remember" className="w-5 accent-primary h-5 border border-solid border-black" />
            <label htmlFor="remember" className="text-primary cursor-pointer text-xl not-italic font-light leading-[normal] font-Poppins">Rememebr me</label>
          </div>
          <p className="text-primary cursor-pointer text-xl not-italic font-light leading-[normal] font-Poppins">Forgot Password ?</p>
        </div>}
        <Inbutton text = {toggol ? "Register":"Login"} />
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login