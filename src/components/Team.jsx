import { EQUIPO } from '../data'

export default function Team() {
  return (
    <section id="equipo" className="section section--tint">
      <div className="container">
        <h2 className="title">Tu salud en manos del equipo</h2>
        <p className="sub">Estos cinco especialistas atienden en el centro. Enfermería, laboratorio y farmacia completan cada turno.</p>
        <div className="grid grid--4">
          {EQUIPO.map(m => (
            <article className={`doc ${m.ancha ? 'doc--ancha' : ''}`} key={m.nombre}>
              <img src={m.foto} alt="" width={m.ancho} height={m.alto} loading="lazy" />
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
