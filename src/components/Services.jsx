import { APOYO, SERVICIOS } from '../data'

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="title">Servicios de hospital en el centro</h2>
        <p className="sub">Urgencias, camas, quirófano, partos y diagnóstico. No solo un consultorio.</p>
        <div className="grid">
          {SERVICIOS.map(s => (
            <article className="card card--photo" key={s.titulo}>
              <img src={s.imagen} alt="" width="1152" height="864" loading="lazy" />
              <div className="card__body">
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </div>
            </article>
          ))}
        </div>
        <h3 className="apoyo__title">También forman parte del centro</h3>
        <div className="apoyo">
          {APOYO.map(a => (
            <article key={a.titulo}>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
            </article>
          ))}
        </div>
        <p className="note">Las fotografías de instalaciones son de referencia para esta demostración. Los retratos del equipo sí son del personal.</p>
      </div>
    </section>
  )
}
