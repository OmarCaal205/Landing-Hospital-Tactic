import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Team from './components/Team'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Trust from './components/Trust'
import Guide from './components/Guide'
import Faq from './components/Faq'
import { INFO } from './data'

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Stats />
        <Services />
        <Trust />
        <Team />
        <Guide />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
      <a className="wa" href={`https://wa.me/${INFO.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.6.3.1.3.1.8-.1 1.4Z"/></svg>
      </a>
    </>
  )
}
