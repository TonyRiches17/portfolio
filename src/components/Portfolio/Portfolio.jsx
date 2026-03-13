import { useRef } from "react";
import "./Portfolio.css";
import { cardInfo } from "../../../constants";

function Portfolio() {

    const scrollRef = useRef(null);
    const scrollAmount = 550;

    const scrollLeft = () => {
      if(scrollRef.current) {
        scrollRef.current.scrollLeft -= scrollAmount;
      }
    };

    const scrollRight = () => {
      if(scrollRef.current) {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    };

  const toSite = (url) => {
    window.open(url, "_blank");
  };

  return(
    <div id="portfolio" className="portfolio">
      <button onClick={scrollLeft} type="button" className="portfolio__buttonl">◁</button>
      <button onClick={scrollRight} type="button" className="portfolio__buttonr">▷</button>
      <h2 className="portfolio__header">Portfolio</h2>
      <div className="portfolio__container" ref={scrollRef}>
        {cardInfo.map((card, index) => (
          <ul key={index} className="portfolio__projects">
            <li onClick={() => toSite(card.url)} className="portfolio__project">
              <img src={card.image} alt="Picture of the project's landing page" className="portfolio__project-image" />
              <div className="portfolio__project-technologies">
                {card.technologies.map((tech, index) => (
                  <p key={index} className="portfolio__project-technology">{tech}</p>
                ))}
              </div>
              <p className="portfolio__project-description">{card.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;