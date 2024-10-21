import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div id="skills" style={{}}></div>
      <Skills/>
      <div id="about" style={{}}></div>
      <About/>
      <div id="contact" style={{}}></div>
      <Contact/>
      <Footer/>



    </div>
  );
}

export default App;
