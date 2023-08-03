import { useState } from "react"
import assets from "../assets/imges"
import {navlinks} from "../content/index"
import styles from "../style"
import Usercard from "./Usercard"

const Mobilemenu = (prop) => {
  return (
            <div className={`fixed z-[60] h-screen w-full ${prop.open? "!top-0":""} -top-[70rem] bg-white shadow-2xl py-24 px-10 duration-1000 ease-in-out xl:hidden `}>
                <div className={`${styles.flexitems}`}>
                    <div className="inline-flex gap-4">
            <img src={assets.logo} alt="logo" />
            <h1 className='text-primary font-Sue text-4xl not-italic font-normal leading-[normal] capitalize'>OnlyBrownies</h1>
                    </div>
            <img src={assets.close}
            alt="close" 
            className="absolute top-6 right-14 cursor-pointer h-14"
            onClick={prop.handelclose} />
                </div>
            <ul className={`${styles.flexitems} gap-[3rem] flex-col my-16`}>
                    {navlinks.map(nav => (
                        <li className={` ${styles.flexitems}`} key={nav.id}>
                            <a className="font-Ubuntu text-2xl font-normal leading-normal text-scondary" href="">{nav.titel}</a>
                        </li>
                    ))}
                </ul>
                <div className={`${styles.flexCenter} gap-8 `}>
          <img src={assets.search} alt="search"className="h-8 cursor-pointer" />
          <div>
          <img src={assets.user} alt="user" className="h-8 cursor-pointer" />
          <Usercard />
          </div>
          <img src={assets.bag} alt="cart" className="h-10 cursor-pointer" />
                </div>
            </div>
        )
    }

export default Mobilemenu