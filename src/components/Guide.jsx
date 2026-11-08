import { CONSULTA, URGENCIAS, INFO } from '../data'

export default function Guide() {
  return (
    <section className="section section--tint">
      <div className="container">
        <h2 className="title">¿Cita o urgencias?</h2>
        <p className="sub">No todo requiere atención inmediata, pero sí seguimiento. Hay situaciones que no pueden esperar.</p>
        <div className="guide">
          <article className="guide__card guide__card--ok">
            <h3>Agenda una consulta si tienes</h3>
            <ul className="checks">{CONSULTA.map(c => <li key={c}>{c}</li>)}</ul>
            <a className="btn btn--green" href="#contacto">Agendar consulta</a>
          </article>
          <article className="guide__card guide__card--urg">
            <h3>Ve a urgencias si hay</h3>
            <ul className="checks checks--red">{URGENCIAS.map(c => <li key={c}>{c}</li>)}</ul>
            <a className="btn btn--red" href={`tel:${INFO.telefono}`}>Llamar {INFO.telefono}</a>
          </article>
        </div>
      </div>
    </section>
  )
}