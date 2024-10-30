import image from "../Hero/hero.svg";
import mainimg from "../Hero/heroapp.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-texts">
        <h1>The money app for Africans.</h1>
        <p className="p1">
          Make free transfers, enjoy cashless options and earn interest on your
          savings with Kuda.
        </p>
        <div className="button">
          <button className="appstore">
            Download on the <b>App Store</b>
          </button>
          <button className="googleplay">
            GET IT ON <b>GOOGLE PLAY</b>
          </button>
        </div>
        <p>Fully Licensed by the CBN  </p>
       
          
        
       
      </div>
      <img className="hero-img1" src={image} alt="" />
      <img className="hero-img2" src={mainimg} alt="" />
      <div></div>
    </div>
  );
};

export default Hero;
