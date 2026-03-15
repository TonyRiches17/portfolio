import { useState } from "react";
import "./MobileNav.css";
import Overlay from "../Overlay/Overlay";
import mobilenav from "../../assets/mobilenav.jpg";

function MobileNav({ isScrolled }) {
const [buttonClicked, setButtonClicked] = useState(false);

const handleButtonClickToggle = () => {
  setButtonClicked(!buttonClicked);
}


  return(
    <div className={isScrolled? "mobilenav" : "mobilenav_off"}>
      <Overlay buttonClicked={buttonClicked} />
      <button onClick={handleButtonClickToggle} className="mobilenav__button">
        <img src={mobilenav} alt="Picture of a coin on the Mobil Navigation button" className={buttonClicked ? "mobilenav__button-image_clicked" : "mobilenav__button-image"} />
      </button>
      <div className="mobilenav__links">
        <p className="mobilenav__link">Biography</p>
        <p className="mobilenav__link">Portfolio</p>
        <p className="mobilenav__link">Contact Me</p>
      </div>
    </div>
  )
}

export default MobileNav;