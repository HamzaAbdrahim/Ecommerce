import React from 'react'
import {Link} from 'react-router-dom'

const Usercard = (prop) => {
  return (
    <div className={`py-10 px-5 bg-white shadow-2xl rounded-2xl absolute Z-[999] w-72 h-64 right-10 duration-300 ease-linear ${prop.show ?"top-28":"-top-72"}`}>
        <img src={prop.user} alt="user" className='w-8 absolute top-5 rightc-5' />
        <label for="countries" className="block mb-4 mt-8 font-medium text-black text-2xl dark:text-white text-center tracking-[1px] ">Changing language</label>
<select id="language" className="bg-gray-50 border tracking-wider  border-primary text-black text-xl block w-full p-2.5 dark:placeholder-scondary dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:focus:border-4">
  <option selected value="en">English</option>
  <option value="fr">العربية</option>
</select>
        <Link><button className='py-4 px-8 w-full bg-primary text-white cursor-pointer my-4 font-Poppins text-xl hover:bg-scondary duration-300'>Log Out</button></Link>
    </div>
  )
}

export default Usercard