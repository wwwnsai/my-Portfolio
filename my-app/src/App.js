import './App.css';
import Navbar from './sections/navbar/Navbar'
import Home from './sections/home/Home'
import Education from './sections/education/Education'
import Skills from './sections/skills/Skills'
import Projects from './sections/projects/Projects';

function App() {

  return (
    <main className="main">
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
    </main>
  )
}

export default App
