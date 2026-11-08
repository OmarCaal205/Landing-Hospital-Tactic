import { INFO } from '../data'

export default function Location() {
  return (
    <section id="ubicacion" className="section">
      <div className="container loc">
        <div>
          <h2 className="title">Encuéntranos en Tactic</h2>
          <ul className="loc__list">
            <li><b>Dirección</b>{INFO.direccion}</li>
            <li><b>Horario</b>{INFO.horario}</li>
            <li><b>Teléfono</b><a href={`tel:${INFO.telefono}`}>{INFO.telefono}</a></li>
          </ul>
          <a className="btn btn--blue" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Tactic+Alta+Verapaz">Cómo llegar</a>
        </div>
        <div className="loc__map">
          {/* 📍 Cambia mapaSrc en src/data.js por el enlace exacto de tu clínica */}
          <iframe title="Mapa de Centro Médico Verapaz" src={INFO.mapaSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  )
}
