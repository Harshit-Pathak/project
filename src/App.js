import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import Briefinfo from "./components/Briefinfo";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Slider />
      <Briefinfo/> 
    </div>
  );
}

export default App;
