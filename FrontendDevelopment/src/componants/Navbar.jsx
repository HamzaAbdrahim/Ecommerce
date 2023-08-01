import { useState } from "react"
import assets from "../assets/imges"
import styles from "../style"
import Searchbar from "./Searchbar"
import {navlinks} from "../content/index"
import Mobilemenu from "./Mobilemenu"
const Navbar = () => {
  const [search , setsearch] = useState(false)
  const [open , setopen] = useState(false)


  function showsearch() {
    setsearch(prev => (!prev) )
  }


  function openmenu() {
    setopen(prev => (!prev) )
  }

  const handleclose = () => setopen(false)
  
  return (
    <>
    <div className={`${styles.flexBetween} px-20 lg:px-[6-37rem] py-8 border-b-2 border-b-solid border-b-[#ccc] `}>
        <div className={`${styles.flexitems} gap-4`}>
            <img src={assets.logo} alt="logo" />
            <h1 className='text-primary font-Sue text-4xl not-italic font-normal leading-[normal] capitalize'>OnlyBrownies</h1>
        </div>
        <ul className={`hidden xl:flex items-center gap-10`}>
          {navlinks.map(nav => (
            <li key={nav.id} className="text-[1.375rem] not-italic font-medium leading-[normal] text-scondary tracking-wider"><a href="*">{nav.titel}</a></li>
            )
          )}

        </ul>
        <div className={`hidden xl:flex items-center gap-10 `}>
          <img src={assets.search} alt="search" onClick={showsearch} className="h-8 cursor-pointer" />
          <img src={assets.user} alt="user" className="h-8 cursor-pointer" />
          <img src={assets.bag} alt="cart" className="h-10 cursor-pointer" />
          {search && <Searchbar />}
        </div>
        <img src={assets.menu} alt="menu" onClick={openmenu} className="h-10 xl:hidden cursor-pointer " />
    </div>
    <Mobilemenu 
    open = {open}
    handelclose = {handleclose} />
    </>
  )
}

export default Navbar