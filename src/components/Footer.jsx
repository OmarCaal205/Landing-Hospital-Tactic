import { INFO, asset } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__in">
        <img src={asset('img/logo.png')} alt="" width="64" height="64" />
        <p>{INFO.nombre}</p>
        <p>{INFO.direccion}</p>
        <p><a href={`tel:${INFO.telefonoHref}`}>{INFO.telefono}</a> · {INFO.horario}</p>
        <small>© {new Date().getFullYear()} {INFO.nombre}. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}
