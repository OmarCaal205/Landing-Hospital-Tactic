import { INFO, asset } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__in">
        <div className="hero__text">
          <span className="pill">Emergencias las 24 horas</span>
          <h1>Comprometidos con <span className="mark">tu salud y la de tu familia</span></h1>
          <p>Centro médico en Tactic, con hospitalización, partos y cirugía. Agenda tu consulta o llama si no puede esperar.</p>
          <div className="hero__cta">
            <a className="btn btn--green" href="#contacto">Agenda tu cita</a>
            <a className="btn btn--ghost" href={`tel:${INFO.telefonoHref}`}>Llamar {INFO.telefono}</a>
          </div>
          <p className="hero__q" lang="quc">K’e aawib’ sa’ aatin qik’in</p>
          <p className="hero__q-es">Cuéntanos: estamos para escucharte.</p>
        </div>
        <div className="hero__media">
          <img src={asset('img/hospital/hospital-fachada.jpg')} width="1280" height="575" alt="Referencia de la fachada del centro, entre montañas" />
        </div>
      </div>
    </section>
  )
}
