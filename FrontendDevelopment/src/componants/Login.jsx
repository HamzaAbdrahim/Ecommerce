import { useState } from "react";
import {Link} from "react-router-dom"
import assets from "../assets/imges";
import styles from "../style";
import Inbutton from "./Inbutton";
import Inputfiled from "./Inputfiled";
import Successemail from "./Successemail";

const Login = () => {
  const [toggol, settoggol] = useState(false);
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  const [username , setusername] = useState("")
  const [rememberMe, setRememberMe] = useState(false);
  const [emtyform , setemtyform] = useState(false)
  const [error, setError] = useState(null);


  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  }

  function toggolbutton() {
    settoggol((prev) => !prev);
  }
  
  function handelsend() {
    if (email === "" && password === "") {
      setemtyform(prev => (!prev))
    }
    validateEmail()
  }
  function handleCheckboxChange(event) {
    setRememberMe(event.target.checked);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  return (
    <div className={`p-12 ${styles.flexCenter} gap-48 flex-col xl:flex-row`}>
      {emtyform && <Successemail />}
      <div className="hidden xl:block">
        <img
          src={assets.loginbg}
          alt="loginbg"
          className="w-[40rem] h-[45rem] rounded-[1.8125rem]"
        />
      </div>

      <div className="flex flex-col xl:-mt-10">
        <Link to={"/"}>
        <div className={`${styles.flexitems} gap-4`}>
          <img src={assets.logo} alt="logo" />
          <h1 className="text-primary font-Sue text-4xl not-italic font-normal leading-[normal] capitalize">
            OnlyBrownies
          </h1>
        </div>
        </Link>
        <div className="rounded-[2.0625rem] bg-[#f8eddd] px-4 gap-10 py-3  mt-12 mb-[3.25rem] flex items-center justify-center">
          <p
            onClick={toggolbutton}
            className={`${toggol ? "" : "text-white bg-[#9E896A] duration-1000 ease-in-out "} py-3 px-14 rounded-[2.0625rem] text-xl not-italic font-normal cursor-pointer leading-[normal]${styles.flexCenter}`}
          >
            Login
          </p>
          <p
            onClick={toggolbutton}
            className={`${toggol ? "text-white bg-[#9E896A] duration-1000 ease-in-out " : ""} text-[#9E896A]  py-3 px-14 rounded-[2.0625rem] text-xl cursor-pointer not-italic font-normal leading-[normal]${styles.flexCenter}`}
          >
            Register
          </p>
        </div>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col"
        >
          <Inputfiled
          value={email}
          handelform={emtyform}
          onChange={setemail}
          
            name="username"
            titel={toggol ? "Email Address" : "User name"}
            placeholder={toggol ? "Enter your Email Address" : "Enter your User name"}
          />
          {error && <span className="mt-2 text-xl font-Poppins text-red-500">{error}</span>}

          {toggol ? (
            <Inputfiled
            value={username}
            handelform={emtyform}
          onChange={setusername}
              name="email"
              titel="User Name"
              style="mt-8"
              placeholder="Enter your User name"
            />
          ) : (
            ""
          )}
                    {username.length < 5 && username.length > 0 && <span className="mt-2 text-xl font-Poppins text-red-500">your User Name must contains 4 letter or more</span>}

          <Inputfiled
          value={password}
          handelform={emtyform}
          onChange={setpassword}
            name="password"
            titel="Password"
            style="mt-8"
            placeholder="Enter your Password"
          />
          {password.length < 5 && password.length > 0 && <span className="mt-2 text-xl font-Poppins text-red-500">your password must contains 5 letter or more </span>}
          {toggol ? (
            ""
          ) : (
            <div className={`${styles.flexBetween} mt-6 mb-14`}>
              <div className="flex items-center gap-[0.37rem]">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={rememberMe}
      onChange={handleCheckboxChange}
                  id="remember"
                  className="w-5 accent-primary h-5 border border-solid border-black"
                />
                <label
                  htmlFor="remember"
                  className="text-primary cursor-pointer text-xl not-italic font-light leading-[normal] font-Poppins"
                >
                  Remember me
                </label>
              </div>
              <p className="text-primary cursor-pointer text-xl not-italic font-light leading-[normal] font-Poppins">
                Forgot Password?
              </p>
            </div>
          )}
          <Inbutton onClick={handelsend} style = {toggol ? "mt-8" : ""} text={toggol ? "Register" : "Login"} />
        </form>
      </div>
    </div>
  );
};

export default Login;