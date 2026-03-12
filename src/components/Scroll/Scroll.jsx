import "./Scroll.css";
import { scrollpics } from "../../../constants";

function Scroll() {
  return(
    <div className="scroll">
      <div className="scroll__container">
        {scrollpics.map((pic, index) => (
          <ul key={index} className="scroll__image-container">
            <li className="scroll__image-list">
              <img src={pic} alt="Picture of Technology" className="scroll__image" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  )

}

export default Scroll;