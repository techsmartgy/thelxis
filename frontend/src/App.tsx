import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Process } from './components/Process'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
