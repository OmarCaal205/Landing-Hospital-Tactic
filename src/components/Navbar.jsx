import { useState, useEffect } from 'react'
import { INFO } from '../data'

const LINKS = [['Servicios', '#servicios'], ['Nosotros', '#nosotros'], ['Equipo', '#equipo'], ['Preguntas', '#preguntas'], ['Ubicación', '#ubicacion']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav__in">
        <a href="#inicio" className="nav__brand"><img src="/img/logo.png" alt="Logo Centro Médico Verapaz" /><span>Centro Médico <b>Verapaz</b></span></a>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>{open ? '✕' : '☰'}</button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          <a className="btn btn--green" href={`tel:${INFO.telefono}`}>Llamar {INFO.telefono}</a>
        </nav>
      </div>
    </header>
  )
}
