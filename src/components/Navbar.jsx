import { useEffect, useState } from 'react'
import { INFO } from '../data'

const LINKS = [['Servicios', '#servicios'], ['Nosotros', '#nosotros'], ['Equipo', '#equipo'], ['Preguntas', '#preguntas'], ['Ubicación', '#ubicacion']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return (
    <header className="nav">
      <div className="container nav__in">
        <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
          <img src="/img/logo.png" alt="" width="46" height="46" />
          <span>Centro Médico <b>Verapaz</b></span>
        </a>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? '✕' : '☰'}
        </button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Secciones">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn--green" href={`tel:${INFO.telefonoHref}`}>Llamar {INFO.telefono}</a>
        </nav>
      </div>
    </header>
  )
}
