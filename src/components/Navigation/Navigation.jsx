import "./Navigation.css";

function Navigation({ isScrolled }) {

  return(
    <div className="navigation">
      <div className="navigation__title-background">
    <h1 className="navigation__title">A Ri¢h Experience</h1>
    </div>
    <div className="navigation__container">
      <p className="navigation__test"></p>
      <ul className={isScrolled ? "navigation__links_scrolled" : "navigation__links"}>
        <li onClick={() => window.location.href="#bio"} className="navigation__link">Biography</li>
        <li onClick={() => window.location.href="#portfolio"} className="navigation__link">Portfolio</li>
        <li onClick={() => window.location.href="#contact"} className="navigation__link">Contact Me</li>
      </ul>
    </div>
    </div>
  )
}

export default Navigation;