import { useState } from "react"
import assets from "../assets/imges"
import {faqs} from "../content/index"
import styles from "../style"
const Fqo = () => {
    const [toggol , settoggol] = useState(false)
    function handeclick(index) {
        settoggol(index)
    }
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter}`}>
    <div className={`flex flex-col gap-10`}>
    <h1 className=" font-Sue text-primary text-center text-5xl mb-20 not-italic font-normal leading-[normal] capitalize">Contact Us</h1>
    {faqs.map((item , index) => (
        <>
        <div key={item.id} onClick={() => handeclick(index)} className={`${styles.flexBetween} px-20 w-[50rem] cursor-pointer h-20 bg-slate-50 rounded-md shadow-2xl`}>
            <h1 className="capitalize text-2xl leading-normal tracking-wider">{item.question}</h1>
            <img src={assets.arrow} alt="arrow" />
        </div>
        <div className={`${styles.flexBetween} ${toggol === index ?'':"hidden"} w-[45rem] cursor-pointer h-38 p-5 bg-slate-50 rounded-md mx-auto shadow-2xl`}>
            <h1 className="capitalize text-2xl leading-normal tracking-wider">{item.answer}</h1>
        </div>
        </>
    ))}
    </div>
    </div>
  )
}

export default Fqo