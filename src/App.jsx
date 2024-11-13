import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
// Import customizer hook:
import useCustomizer from "./hooks/useCustomizer";

import Navbar from "./components/Navbar";
import Links from "./components/Links";
import Footer from "./components/Footer";

const App = () => {
  const {bgColor, fontFamily, navColor, primaryButtonColor, cardPostColor} = useCustomizer();

  useEffect(() => {
    // Apply the background color to the body:
    document.body.style.backgroundColor = `#${bgColor}`
    // Change font based on selection returned from the API
    if (fontFamily === 'Arial') {
      document.body.style.fontFamily = `'Arial', sans-serif`;
    }
    if (fontFamily === 'Roboto') {
      document.body.style.fontFamily = `'Roboto', sans-serif`;
    }
    if (fontFamily === 'Poppins') {
      document.body.style.fontFamily = `'Poppins', sans-serif`;
    }
    if (fontFamily === 'DotGothic') {
      document.body.style.fontFamily = `'DotGothic16', sans-serif`;
    }

    document.querySelector('nav').style.backgroundColor = navColor;
    document.querySelector('footer').style.backgroundColor = navColor;

    // document.querySelector('#primaryButton').style.backgroundColor = primaryButtonColor;
    // document.querySelector('#postContainer').style.backgroundColor = cardPostColor;


    // Change color of the Header and Mobile menu
    // document.getElementById('topNav').style.backgroundColor = `#${navColor}`;
    
  }, [bgColor, fontFamily, navColor, primaryButtonColor])

  return (
    <HashRouter>
      <Navbar/>
      <Links/>
      <Footer/>
    </HashRouter>
  );
};

export default App;
