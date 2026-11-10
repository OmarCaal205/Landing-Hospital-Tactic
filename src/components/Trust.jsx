import { CONFIANZA, asset } from '../data'

export default function Trust() {
  return (
    <section id="nosotros" className="section">
      <div className="container trust">
        <img className="trust__img" src={asset('img/hospital/hospitalizacion.jpg')} width="1152" height="864" alt="Habitación de hospitalización, imagen de referencia" loading="lazy" />
        <div>
          <h2 className="title">Del consultorio a la cama de hospital</h2>
          <ul className="checks">{CONFIANZA.map(c => <li key={c}>{c}</li>)}</ul>
          <a className="btn btn--blue" href="#contacto">Agenda tu cita</a>
        </div>
      </div>
    </section>
  )
}
