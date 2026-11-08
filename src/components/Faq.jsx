import { FAQ } from '../data'

export default function Faq() {
  return (
    <section id="preguntas" className="section">
      <div className="container faq">
        <h2 className="title">Preguntas frecuentes</h2>
        {FAQ.map(f => (
          <details key={f.p}><summary>{f.p}</summary><p>{f.r}</p></details>
        ))}
      </div>
    </section>
  )
}