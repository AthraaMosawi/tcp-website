import "../Style/herosection.css";
import sloganImg from "../Assets/images/slogan2.svg";
// import TextField from "@mui/material/TextField";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-wrapper">
          <div className="div">
            <p className="text-wrapper">
              Learn technical skills and pursue job opportunities in Iraq and
              the region.
            </p>
            <div className="search">
              <div class="buttonInside">
                <input placeholder="Want to learn?" />
                <button id="erase">Explore</button>
              </div>
            </div>

            <img className="asset" alt="Asset" src={sloganImg} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
