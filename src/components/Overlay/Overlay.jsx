import "./Overlay.css";

function Overlay({ buttonClicked }) {
  return(
    <div className={buttonClicked? "overlay" : "overlay_off"}></div>
  )
}

export default Overlay;