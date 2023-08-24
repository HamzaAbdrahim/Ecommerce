import React from 'react'

const Inputfiled = (props) => {
  const handleInputChange = (event) => {
    props.onChange(event.target.value);
  }
  return (
    <>
      <label htmlFor={props.name} className={`${props.handelform ? "text-[red]":"text-primary"} ${props.style} font-Poppins mb-3 text-xl not-italic font-normal leading-[normal]`}>{props.titel}</label>
      <input
      name={props.name}
        id={props.name}
        className={`border font-Poppins text-[#ACACAC] text-xl not-italic font-light leading-[normal] focus:outline-primary  p-5 rounded-[2.5rem] border-solid ${props.handelform ? "border-[red]":"border-[#9E896A]"}`}
        type="text"
        placeholder={props.placeholder}
        //onChange={(e) => e.target.value }
        onChange={handleInputChange}
        value={props.value}
      />
    </>
  )
}

export default Inputfiled