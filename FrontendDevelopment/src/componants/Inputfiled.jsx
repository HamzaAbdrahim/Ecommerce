import React from 'react'

const Inputfiled = (props) => {
  const handleInputChange = (event) => {
    props.onChange(event.target.value);
  }
  return (
    <>
      <label htmlFor={props.name} className={`${props.handelform ? "text-[red]":"text-primary"} font-Poppins mb-3 text-xl not-italic font-normal leading-[normal]`}>{props.titel}</label>
      <input
      name={props.name}
        id={props.name}
        className={`${props.style} border font-Poppins text-[#ACACAC] text-xl not-italic font-light leading-[normal] focus:outline-primary pl-8 w-[27.1875rem] h-[3.375rem] rounded-[2.5rem] border-solid ${props.handelform ? "border-[red]":"border-[#9E896A]"}`}
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