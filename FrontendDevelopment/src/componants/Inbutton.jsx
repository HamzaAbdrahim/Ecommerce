import React from 'react'
import styles from '../style'

const Inbutton = (prop) => {
  return (
    <input type="submit" value={prop.text} className={`${styles.flexCenter} w-[14rem] h-14 rounded-[2.25rem] ml-auto text-xl cursor-pointer duration-300 hover:opacity-95 focus:bg-primary not-italic font-normal leading-[normal] bg-[#9E896A] text-white`} />
  )
}

export default Inbutton