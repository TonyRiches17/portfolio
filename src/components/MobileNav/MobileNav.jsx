import { useState } from "react";
import "./MobileNav.css";
import Overlay from "../Overlay/Overlay";
import mobilenav from "../../assets/mobilenav.jpg";

function MobileNav({ isScrolled }) {
const [buttonClicked, setButtonClicked] = useState(false);

const handleButtonClickToggle = (evt) => {
  evt.stopPropagation();
  setButtonClicked(!buttonClicked);
}


  return(
    <div className={isScrolled? "mobilenav" : "mobilenav_off"}>
      <Overlay buttonClicked={buttonClicked} />
      <div className="mobilenav__border-hide">
      <button onClick={handleButtonClickToggle} className={buttonClicked ? "mobilenav__button_clicked" : "mobilenav__button"}>
        <img src={mobilenav} alt="Picture of a coin on the Mobil Navigation button" className={buttonClicked ? "mobilenav__button-image_clicked" : "mobilenav__button-image"} />
      </button>
      <div className={buttonClicked ? "mobilenav__links_clicked" : "mobilenav__links"}>
        <p className="mobilnav__link"></p>
        <p onClick={() => {window.location.href="#bio"; setButtonClicked(false);}} className="mobilenav__link">Biography</p>
        <p onClick={() => {window.location.href="#portfolio"; setButtonClicked(false);}} className="mobilenav__link">Portfolio</p>
        <p onClick={() => {window.location.href="#contact"; setButtonClicked(false);}} className="mobilenav__link">Contact Me</p>
      </div>
      </div>
    </div>
  )
}

export default MobileNav;