import { useState } from "react"
import assets from "../assets/imges"
import styles from "../style"
import Inbutton from "./Inbutton"
import Inputfiled from "./Inputfiled"
import Successemail from "./Successemail"

const Login = () => {
  const [toggol , settoggol] = useState(false)
  const [values , setvalues] = useState({
    username:"",
    password:"",
    email:"",
    checkbox:false,

  })

  function toggolbutton() {
    settoggol(prev => (!prev))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with values:", values);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setvalues(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (

    <div className={`p-12 ${styles.flexCenter} gap-48 flex-col xl:flex-row`}>
      <Successemail />
      <div className="hidden xl:block">
      <img src={assets.loginbg} alt="loginbg" className="w-[40rem] h-[45rem] rounded-[1.8125rem]" />
      </div>

      <div className="flex flex-col xl:-mt-10">
      <div className={`${styles.flexitems} gap-4`}>
            <img src={assets.logo} alt="logo" />
            <h1 className='text-primary font-Sue text-4xl not-italic font-normal leading-[normal] capitalize'>OnlyBrownies</h1>
        </div>
        <div className="rounded-[2.0625rem] bg-[#f8eddd] px-4 gap-10 py-3  mt-12 mb-[3.25rem] flex items-center justify-center">
          <p 
          onClick={toggolbutton}
          className={`${toggol ? "" : "text-white bg-[#9E896A] duration-1000 ease-in-out "} py-3 px-14 rounded-[2.0625rem] text-xl not-italic font-normal leading-[normal]${styles.flexCenter}`}>Login</p>
          <p 
          onClick={toggolbutton}
          className={`${toggol ? "text-white bg-[#9E896A] duration-1000 ease-in-out " : ""} text-[#9E896A]  py-3 px-14 rounded-[2.0625rem] text-xl not-italic font-normal leading-[normal]${styles.flexCenter}`}>Register</p>
        </div>
        <form action="" method="post" onSubmit={handleSubmit} className="flex flex-col">
          <Inputfiled 
          name="username"
          titel = {toggol?"Email Address":"User name"}
          onChange={handleInputChange}
          style = "mb-8"
          placeholder ={toggol?"Enter your Email Address":"Enter your User name"}
          value = {values.username}
          />
{ toggol ? <Inputfiled 
          name="email"
          titel = "User name"
          style = "mb-8"
          onChange={handleInputChange}
          value = {values.email}
          placeholder = "Enter your User name"/> :""}
          <Inputfiled 
          name="Password"
          titel = "Password"
          style = "mb-8"
          onChange={handleInputChange}
          value={values.password}
          placeholder = "Enter your Password"/>
        {toggol ? "" :<div className={`${styles.flexBetween} mt-6 mb-14`}>
          <div className="flex items-center gap-[0.37rem]">
          <input type="checkbox" name="checkbox" id="remember" className="w-5 accent-primary h-5 border border-solid border-black" />
            <label htmlFor="remember" className="text-primary cursor-pointer text-xl not-italic font-light leading-[normal] font-Poppins">Rememebr me</label>
          </div>
          <p className="text-primary cursor-pointer text-xl not-italic font-light leading-[normal] font-Poppins">Forgot Password ?</p>
        </div>}
        <Inbutton text = {toggol ? "Register":"Login"} />
        </form>
      </div>
    </div>
  )
}

export default Login