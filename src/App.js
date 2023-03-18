import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer/>

    </div>

  );
}

export default App;
