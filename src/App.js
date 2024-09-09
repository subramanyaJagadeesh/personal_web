import './styles/style.scss';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Vector from './images/vector.png'
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Experience/>
      <Projects />
      <Skills />
      <Contact/>
      <img id="vector" src={Vector} width="100%" height="100%" style={{zIndex:-100}} />
    </div>
  );
}

export default App;
