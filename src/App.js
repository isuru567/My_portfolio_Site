import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Projects from './Components/Projects';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <Contact />
       
    </div>
  );
}

export default App;
 