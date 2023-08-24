import React from 'react'
import styles, { layout } from '../style'
import Inbutton from './Inbutton'
import Inputfiled from './Inputfiled'
import assets from '../assets/imges'

const Contact = () => {
  return (
    <div className={`${styles.paddingY} flex items-center flex-col justify-center p-12`}>
    <h1 className=" font-Sue text-primary text-center text-5xl mb-20 not-italic font-normal leading-[normal] capitalize">Contact Us</h1>
    <div className={`flex flex-col-reverse xl:flex-row justify-center gap-36  xl:gap-96`}>
    <div className={`${styles.flexCenter} text-center`}>
      <form action="" method="POST">
        <div className="mb-5">
            <p className='text-2xl mb-4'>Full Name</p>
            <Inputfiled name = "Name" placeholder = "Full Name" />
        </div>
        <div className="mb-5">
            <p className='text-2xl mb-4'>Email</p>
            <Inputfiled  name = "email" placeholder = "Email Address" />
        </div>
        <div className="mb-5">
          <label
            for="message"
            class="block text-2xl mb-4  "
          >
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Type your message"
            class="max-w-96 h-62 resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-10 text-2xl text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
          >
          </textarea>
        </div>
            <Inbutton text = "Submit" styles = "" />
      </form>
    </div>
    <img src={assets.contactimg} alt="contactimg" className='h-[35rem]' />
    </div>
  </div>
  )
}

export default Contact