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
            <h3>Llama o ven de inmediato si hay</h3>
            <ul className="checks checks--red">{URGENCIAS.map(c => <li key={c}>{c}</li>)}</ul>
            <a className="btn btn--red" href={`tel:${INFO.telefonoHref}`}>Llamar {INFO.telefono}</a>
            <p className="note">Esta lista solo orienta. No reemplaza una valoración médica.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
