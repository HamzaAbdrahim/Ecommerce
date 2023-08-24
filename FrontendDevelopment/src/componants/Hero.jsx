import { useEffect, useState } from "react";
import assets from "../assets/imges";
import styles from "../style";

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(assets.mainlanding1);
  const images = [assets.mainlanding1, assets.mainlanding2, assets.mainlanding3, assets.mainlanding4, assets.mainlanding5];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImg);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImg(images[nextIndex]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImg, images]);

  return (
    <div className="bg-cover bg-center bg-no-repeat w-full after:absolute h-[40rem] after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:opacity-60 relative  duration-1000 ease-in  " style={{ backgroundImage: `url(${currentImg})` }}>
      <div className={`${styles.flexBetween}`}>
        <div className="relative z-10 p-14 lg:p-28">
          <img src={assets.titel} alt="titel" />
          <p className="text-white text-3xl not-italic font-normal max-w-6xl leading-[189.188%]">These cakes are made with butter or another fat, like vegetable shortening. The common way is to mix the fat and sugar, then add eggs, and then add flour. </p>
          <div className="flex items-center w-full gap-8 mt-10">
            <button className='px-10 h-14 leading-[35px] text-center hover:scale-125 active:bg-black ease-in-out  bg-primary tracking-wider text-[17px]  text-white font-semibold transition-all duration-[0.5s] rounded-none border-2 border-solid'>Order Now</button>
            <button className='px-10 h-14 leading-[35px] text-center hover:scale-125 active:bg-black ease-in-out  bg-transparent text-[17px] tracking-[0.5px] text-white font-semibold transition-all duration-[0.5s] rounded-none border-2 border-solid'>See Our Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;