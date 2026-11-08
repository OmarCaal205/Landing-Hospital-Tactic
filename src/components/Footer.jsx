import { INFO } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__in">
        <img src="/img/logo.png" alt="Centro Médico Verapaz" />
        <p>{INFO.direccion} · {INFO.telefono}</p>
        <p>
          <a href={INFO.facebook}>Facebook</a> · <a href={INFO.instagram}>Instagram</a>
        </p>
        <small>© {new Date().getFullYear()} {INFO.nombre}. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}
