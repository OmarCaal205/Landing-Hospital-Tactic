import { EQUIPO } from '../data'

export default function Team() {
  return (
    <section id="equipo" className="section section--tint">
      <div className="container">
        <h2 className="title">Tu salud en manos expertas</h2>
        <p className="sub">Conoce a los médicos que te atienden con dedicación y calidez.</p>
        <div className="grid grid--4">
          {EQUIPO.map(m => (
            <article className="doc" key={m.nombre}>
              <img src={m.foto} alt={m.nombre} loading="lazy" />
              <div className="doc__body">
                <h3>{m.nombre}</h3>
                <p className="doc__esp">{m.especialidad}</p>
                <ul>{m.temas.map(t => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}