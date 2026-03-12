import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css'
import Navigation from '../Navigation/Navigation'
import Bio from "../Bio/Bio";
import Scroll from "../Scroll/Scroll";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrolling = () => {
    if(window.pageYOffset > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return () => window.removeEventListener("scroll", scrolling);
  }, []);

  return (
    <div className="app">
      <div className="app__rectangles">
        <div className="app__rectanglel"></div>
        <div className="app__rectangler"></div>
      </div>
      <Navigation isScrolled={isScrolled} />
      <Bio />
      <Scroll />
    </div>
  )
}

export default App
