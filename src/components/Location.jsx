import { INFO, mapaEmbed, mapaRuta } from '../data'

export default function Location() {
  return (
    <section id="ubicacion" className="section">
      <div className="container loc">
        <div>
          <h2 className="title">Encuéntranos en Tactic</h2>
          <ul className="loc__list">
            <li><b>Dirección</b>{INFO.direccion}</li>
            <li><b>Emergencias</b>{INFO.horario}</li>
            <li><b>Consultas</b>{INFO.consulta}</li>
            <li><b>Teléfono</b><a href={`tel:${INFO.telefonoHref}`}>{INFO.telefono}</a></li>
          </ul>
          <a className="btn btn--blue" target="_blank" rel="noreferrer" href={mapaRuta}>Cómo llegar</a>
        </div>
        <div className="loc__map">
          <iframe title="Mapa de Centro Médico Verapaz en Barrio Las Magnolias, Tactic" src={mapaEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}
