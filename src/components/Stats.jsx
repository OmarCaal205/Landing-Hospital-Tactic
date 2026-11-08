import { STATS } from '../data'

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map(s => <div key={s.etiqueta}><strong>{s.valor}</strong><span>{s.etiqueta}</span></div>)}
      </div>
    </section>
  )
}
