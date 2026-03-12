import { Routes, Route } from "react-router-dom";
import './App.css'
import Navigation from '../Navigation/Navigation'
import Bio from "../Bio/Bio";

function App() {


  return (
    <div className="app">
      <Navigation />
      <Bio />
    </div>
  )
}

export default App
