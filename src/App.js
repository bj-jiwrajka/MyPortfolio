import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Intro />
      <About darkmode={darkMode}/>
      <Services darkmode={darkMode}/>
      <Education darkmode={darkMode} />
      <Projects darkmode={darkMode} />
      <Contact darkmode={darkMode} />
      <Footer darkmode={darkMode}/>

    </div>

  );
}

export default App;
