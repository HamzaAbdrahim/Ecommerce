import React from 'react'
import {Link} from 'react-router-dom'
import assets from '../assets/imges'

const Usercard = (prop) => {
  return (
    <div className={`py-8 px-5 bg-white shadow-2xl rounded-2xl absolute z-10 w-72 h-82 right-10 duration-300 ease-linear ${prop.show ?"top-32":"-top-96"}`}>
        <img src={assets.user} className='h-10 mx-auto' alt="" />
        <h2 className='text-3xl font-Sue leading-normal my-4 text-primary text-center'>sing up to be part of the family</h2>
        <Link to={"/login"}><button className='py-4 px-8 w-full bg-primary text-white cursor-pointer  font-Sue text-2xl hover:bg-scondary duration-300'>Log in</button></Link>
        <Link to={"/login"}><button className='py-4 px-8 w-full bg-primary text-white cursor-pointer mt-2 font-Sue text-2xl hover:bg-scondary duration-300'>Sing Up</button></Link>
    </div>
  )
}

export default Usercard