import React from 'react'

const Inputfiled = (prop) => {
  return (
    <>
    <label htmlFor="email" className='font-Poppins mb-3 text-primary text-xl not-italic font-normal leading-[normal]'>{prop.titel}</label>
    <input id='email' className={`${prop.style} border font-Poppins text-[#ACACAC] text-xl not-italic font-light leading-[normal] pl-8 w-[27.1875rem] h-[3.375rem] rounded-[2.5rem] border-solid border-[#9E896A]`} type="text" placeholder={prop.placeholder} />
    </>
  )
}

export default Inputfiled