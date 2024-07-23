import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Aos from "aos"
import "aos/dist/aos.css"


const App = () => {
  useEffect (() =>{
    Aos.init();
  }, [])

  return (
    <>
    <Navbar/>
   <div className = "container">
    <Home/>
    <Experience/>
    <Skills/>    
    <Projects/>
    <Certificates/>       
    <Contact/>    

   </div>

    </>
  );
};

export default App