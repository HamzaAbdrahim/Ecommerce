import assets from "../assets/imges";

const Hero = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-[400px] " style={{ backgroundImage: `url(${assets.mainlanding})` }}>
      <div>
      </div>
      <div>
        <img src={assets.mainlanding} alt="mainlanding" />
      </div>
    </div>
  );
};

export default Hero;