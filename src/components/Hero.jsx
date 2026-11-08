import { INFO } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__in">
        <div className="hero__text">
          <span className="pill">Atención las 24 horas</span>
          <h1>Comprometidos con <span className="mark">tu salud</span> y la de tu <span className="mark">familia</span></h1>
          <p>Médicos cercanos, equipo preparado y atención con calidez en el corazón de Alta Verapaz.</p>
          <div className="hero__cta">
            <a className="btn btn--green" href="#contacto">Agenda tu cita</a>
            <a className="btn btn--ghost" href={`tel:${INFO.telefono}`}>Llamar {INFO.telefono}</a>
          </div>
          <small className="hero__q">K’e aawib’ sa’ aatin qik’in</small>
        </div>
        <div className="hero__media">
          <img src="/img/doctor-rony.png" alt="Dr. Rony Barrios, pediatra" />
          <div className="float float--a"><b>Cirugía</b><span>cuando la necesitas</span></div>
          <div className="float float--b"><b>Partos</b><span>cada uno es una historia</span></div>
        </div>
      </div>
    </section>
  )
}
