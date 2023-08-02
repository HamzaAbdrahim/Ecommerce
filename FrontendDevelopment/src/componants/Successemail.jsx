import assets from "../assets/imges"
const Successemail = () => {
    return (
<div className='w-96 h-16 rounded-md absolute duration-150 ease-in-out top-10  right-0 shadow-2xl flex gap-4 
        items-center pl-6 border-l-[8px] border-l-[#fd6363] '>
        <img src={assets.closeerror} alt="" className='h-8' />
        <span className='text-[#50575e] font-semibold text-xl '>Error <span className='block font-normal '>You Must Fill The Form </span></span>
        </div>
    )
}

export default Successemail
