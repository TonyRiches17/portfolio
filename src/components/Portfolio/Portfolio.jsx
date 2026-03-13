import "./Portfolio.css";
import { cardInfo } from "../../../constants";

function Portfolio() {


  const toSite = (url) => {
    window.open(url, "_blank");
    console.log("I clicked it");
  };

  return(
    <div id="portfolio" className="portfolio">
      <div className="portfolio__container">
        {cardInfo.map((card, index) => (
          <ul key={index} className="portfolio__projects">
            <li className="portfolio__project">
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