import { CONFIANZA } from '../data'

export default function Trust() {
  return (
    <section id="nosotros" className="section">
      <div className="container trust">
        <img className="trust__img" src="/img/fotos/edificio.jpg" width="820" height="390" alt="Fachada del centro en Barrio Las Magnolias, Tactic" loading="lazy" />
        <div>
          <h2 className="title">Un lugar de confianza para tu familia</h2>
          <ul className="checks">{CONFIANZA.map(c => <li key={c}>{c}</li>)}</ul>
          <a className="btn btn--blue" href="#contacto">Agenda tu cita</a>
        </div>
      </div>
    </section>
  )
}
