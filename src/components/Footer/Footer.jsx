import "./Footer.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.jpg";
import instagram from "../../assets/instagram.jpg";
import logo from "../../assets/logo.png";

function Footer() {
  return(
    <div className="footer">
      <div className="footer__links">
        <a href="https://www.linkedin.com/in/antonio-rich-richardson/" target="_blank" rel="noopener noreferrer" className="footer__link">
        <img src={linkedin} alt="LinkedIn icon" className="footer__link-image" />
        LinkedIn
        </a>
        <a href="https://github.com/tonyriches17" target="_blank" rel="noopener noreferrer" className="footer__link">
        <img src={github} alt="GitHub icon" className="footer__link-image" />
        GitHub
        </a>
        <a href="https://instagram.com/getrichsites" target="_blank" rel="noopener noreferrer" className="footer__link">
        <img src={instagram} alt="Instagram icon" className="footer__link-image" />
        Instagram
        </a>
        <a href="https://getrichsites.netlify.app" target="_blank" rel="noopener noreferrer" className="footer__link">
        <img src={logo} alt="Get Rich Sites icon" className="footer__link-image" />
        Get Ri¢h $ites
        </a>
      </div>
      <a href="mailto:getrichsites@gmail.com" className="footer__email">getrichsites@gmail.com</a>
      <p className="footer__copyright">&copy; Ri¢h 2026</p>
    </div>
  )
}

export default Footer;