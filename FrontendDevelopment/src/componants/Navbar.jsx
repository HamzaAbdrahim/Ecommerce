import { useState } from "react"
import assets from "../assets/imges"
import styles from "../style"
import Searchbar from "./Searchbar"
import {navlinks} from "../content/index"
const Navbar = () => {
  const [search , setsearch] = useState(false)
  function showsearch() {
    setsearch(prev => (!prev) )
  }
  return (
    <div className={`${styles.flexBetween} px-20 lg:px-[6-37rem] py-8 border-b-2 border-b-solid border-b-[#ccc] `}>
        <div className={`${styles.flexitems} gap-4`}>
            <img src={assets.logo} alt="logo" />
            <h1 className='text-primary font-Sue text-4xl not-italic font-normal leading-[normal] capitalize'>OnlyBrownies</h1>
        </div>
        <ul className={`${styles.flexitems} gap-10`}>
          {navlinks.map(nav => (
            <li key={nav.id} className="text-[1.375rem] not-italic font-medium leading-[normal] text-scondary tracking-wider"><a href="*">{nav.titel}</a></li>
            )
          )}

        </ul>
        <div className={`${styles.flexitems} gap-10`}>
          <img src={assets.search} alt="search" onClick={showsearch} className="h-8 cursor-pointer" />
          <img src={assets.user} alt="user" className="h-8 cursor-pointer" />
          <img src={assets.bag} alt="cart" className="h-10 cursor-pointer" />
          {search && <Searchbar />}
        </div>
    </div>
  )
}

export default Navbar