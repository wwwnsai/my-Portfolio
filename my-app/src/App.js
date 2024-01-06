import './App.css';
import Navbar from './sections/navbar/Navbar'
import Home from './sections/home/Home'
import Education from './sections/education/Education'
import Skills from './sections/skills/Skills'
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

function App() {

  return (
    <main className="main">
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
