import { useState } from 'react'
import { INFO } from '../data'

export default function Contact() {
  const [f, setF] = useState({ nombre: '', telefono: '', mensaje: '' })
  const change = e => setF({ ...f, [e.target.name]: e.target.value })
  const send = e => {
    e.preventDefault()
    const txt = `Hola, soy ${f.nombre}. Teléfono: ${f.telefono}. ${f.mensaje}`
    window.open(`https://wa.me/${INFO.whatsapp}?text=${encodeURIComponent(txt)}`, '_blank')
  }
  return (
    <section id="contacto" className="section contact">
      <div className="container contact__in">
        <div>
          <h2 className="title title--light">Agenda tu chequeo hoy</h2>
          <p>Déjanos tus datos y te respondemos por WhatsApp. Si es una emergencia, llama al <b>{INFO.telefono}</b>.</p>
        </div>
        <form onSubmit={send} className="form">
          <input name="nombre" placeholder="Tu nombre" value={f.nombre} onChange={change} required />
          <input name="telefono" type="tel" placeholder="Tu teléfono" value={f.telefono} onChange={change} required />
          <textarea name="mensaje" rows="3" placeholder="¿En qué podemos ayudarte?" value={f.mensaje} onChange={change} />
          <button className="btn btn--green" type="submit">Enviar por WhatsApp</button>
        </form>
      </div>
    </section>
  )
}
