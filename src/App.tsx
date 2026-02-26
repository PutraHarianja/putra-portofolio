import './App.css'
import { useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setIsReady(true))
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero isReady={isReady} />
      <About />
      <Projects isReady={isReady} />
      <Skills />
      <Contact isReady={isReady} />
    </div>
  )
}

export default App
