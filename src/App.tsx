import { Nav } from './components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { GitHub } from './components/GitHub/GitHub'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { AmbientOrbs } from './components/shared/AmbientOrbs'

export default function App() {
  return (
    <>
      <Nav />
      <AmbientOrbs />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
