import { useState } from 'react'
import { APOYO, INFO, SERVICIOS } from '../data'

const VACIO = { nombre: '', telefono: '', servicio: '', mensaje: '', acepta: false }

export default function Contact() {
  const [f, setF] = useState(VACIO)
  const [aviso, setAviso] = useState('')
  const change = event => {
    const { name, type, checked, value } = event.target
    setF(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }
  const send = event => {
    event.preventDefault()
    setAviso('')
    const lineas = [
      `Hola, soy ${f.nombre.trim()}.`,
      `Teléfono: ${f.telefono.trim()}.`,
      f.servicio ? `Motivo: ${f.servicio}.` : '',
      f.mensaje.trim(),
    ].filter(Boolean)
    const url = `https://wa.me/${INFO.whatsapp}?text=${encodeURIComponent(lineas.join(' '))}`
    const ventana = window.open(url, '_blank', 'noopener,noreferrer')
    if (!ventana) setAviso(url)
  }
  return (
    <section id="contacto" className="section contact">
      <div className="container contact__in">
        <div>
          <h2 className="title title--light">Agenda tu cita</h2>
          <p>Déjanos tus datos y se abre WhatsApp con el mensaje listo. Si es una emergencia, llama al <a href={`tel:${INFO.telefonoHref}`}><b>{INFO.telefono}</b></a>.</p>
        </div>
        <form onSubmit={send} className="form">
          <label>
            <span>Tu nombre</span>
            <input name="nombre" autoComplete="name" placeholder="Nombre y apellido" value={f.nombre} onChange={change} required />
          </label>
          <label>
            <span>Tu teléfono</span>
            <input name="telefono" type="tel" inputMode="tel" autoComplete="tel" placeholder="3072 0000" value={f.telefono} onChange={change} required />
          </label>
          <label>
            <span>Motivo</span>
            <select name="servicio" value={f.servicio} onChange={change}>
              <option value="">Elige un servicio</option>
              {[...SERVICIOS, ...APOYO].map(s => <option key={s.titulo}>{s.titulo}</option>)}
            </select>
          </label>
          <label>
            <span>Mensaje</span>
            <textarea name="mensaje" rows="3" placeholder="Cuéntanos en qué podemos ayudarte, sin detalles clínicos sensibles." value={f.mensaje} onChange={change} />
          </label>
          <label className="form__check">
            <input name="acepta" type="checkbox" checked={f.acepta} onChange={change} required />
            <span>Acepto que me contacten por WhatsApp para dar seguimiento a esta solicitud.</span>
          </label>
          <button className="btn btn--green" type="submit">Enviar por WhatsApp</button>
          <p className="form__legal">Al enviar se abre WhatsApp con tu nombre, teléfono y mensaje. Evita escribir diagnósticos u otra información clínica.</p>
          {aviso && <p className="form__aviso">El navegador bloqueó la ventana. <a href={aviso} target="_blank" rel="noreferrer">Abrir WhatsApp</a>.</p>}
        </form>
      </div>
    </section>
  )
}
