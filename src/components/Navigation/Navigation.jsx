import "./Navigation.css";

function Navigation({ isScrolled }) {
  return(
    <div className="navigation">
    <h1 className="navigation__title">A Ri¢h Experience</h1>
    <div className="navigation__container">
      <p className="navigation__test"></p>
      <ul className={isScrolled ? "navigation__links_scrolled" : "navigation__links"}>
        <span className="navigation__link-background">
        <li className="navigation__link">Biography</li>
        </span>
        <span className="navigation__link-background">
        <li className="navigation__link">Portfolio</li>
        </span>
        <span className="navigation__link-background">
        <li className="navigation__link">Contact Me</li>
        </span>
      </ul>
    </div>
    </div>
  )
}

export default Navigation;