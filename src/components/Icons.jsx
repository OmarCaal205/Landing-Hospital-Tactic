const common = {
  viewBox: '0 0 24 24',
  width: 28,
  height: 28,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export default function ServiceIcon({ name }) {
  return (
    <svg {...common}>
      {name === 'consulta' && (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M5.5 19.5c1.2-3 3.2-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
        </>
      )}
      {name === 'pediatria' && (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M9 10.5h.01M15 10.5h.01M9 14.5c.8 1 2 1.5 3 1.5s2.2-.5 3-1.5" />
        </>
      )}
      {name === 'maternidad' && (
        <path d="M12 20s-6.5-4.1-6.5-8.2A3.7 3.7 0 0 1 12 9a3.7 3.7 0 0 1 6.5 2.8C18.5 15.9 12 20 12 20z" />
      )}
      {name === 'cirugia' && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M12 8v8M8 12h8" />
        </>
      )}
      {name === 'emergencias' && <path d="M3 12h4.2l2.1-5.2L13.2 17l2.2-5H21" />}
      {name === 'rayos' && (
        <>
          <rect x="4" y="3.5" width="16" height="17" rx="2" />
          <path d="M8 8.5h8M8 12.5h8M8 16.5h5" />
        </>
      )}
    </svg>
  )
}
