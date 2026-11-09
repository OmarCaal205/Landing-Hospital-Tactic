import { SERVICIOS } from '../data'
import ServiceIcon from './Icons'

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="title">Servicios para toda tu familia</h2>
        <p className="sub">Lo que hoy ofrece el centro, en un solo lugar.</p>
        <div className="grid">
          {SERVICIOS.map(s => (
            <article className="card" key={s.titulo}>
              <div className="card__ico"><ServiceIcon name={s.icono} /></div>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
