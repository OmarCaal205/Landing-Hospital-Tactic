import { INFO } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__in">
        <div className="hero__text">
          <span className="pill">Emergencias las 24 horas</span>
          <h1>Comprometidos con <span className="mark">tu salud</span> y la de tu <span className="mark">familia</span></h1>
          <p>Médicos cercanos y atención en el corazón de Alta Verapaz. Agenda tu consulta o llama si es una urgencia.</p>
          <div className="hero__cta">
            <a className="btn btn--green" href="#contacto">Agenda tu cita</a>
            <a className="btn btn--ghost" href={`tel:${INFO.telefonoHref}`}>Llamar {INFO.telefono}</a>
          </div>
          <p className="hero__q" lang="quc">K’e aawib’ sa’ aatin qik’in</p>
        </div>
        <div className="hero__media">
          <img src="/img/fotos/rony.jpg" width="590" height="455" alt="Dr. Rony Barrios, pediatra del Centro Médico Verapaz" />
        </div>
      </div>
    </section>
  )
}
