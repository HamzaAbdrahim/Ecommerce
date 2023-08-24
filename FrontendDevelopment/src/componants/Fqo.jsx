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
    <h1 className=" font-Sue text-primary text-center text-5xl not-italic font-normal leading-[normal] capitalize">FAQ</h1>
    {faqs.map((item , index) => (
        <>
        <div key={item.id} onClick={() => handeclick(index)} className={`${styles.flexBetween} p-5 md:px-20 md:py-5 cursor-pointer  bg-slate-50 rounded-md shadow-2xl mx-5 `}>
            <h1 className="capitalize text-2xl leading-normal tracking-wider">{item.question}</h1>
            <img src={assets.arrow} alt="arrow" />
        </div>
        <div className={`${styles.flexBetween} ${toggol === index ?'':"hidden"} max-w-[56rem] mx-auto cursor-pointer p-5 md:px-10 md:py-5 bg-slate-50 rounded-md shadow-2xl`}>
            <h1 className="capitalize text-2xl leading-normal tracking-wider">{item.answer}</h1>
        </div>
        </>
    ))}
    </div>
    </div>
  )
}

export default Fqo