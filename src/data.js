export const INFO = {
  nombre: 'Centro Médico Verapaz',
  telefono: '3072-0389',
  telefonoHref: '+50230720389',
  whatsapp: '50230720389',
  direccion: 'Barrio Las Magnolias, Tactic, Alta Verapaz',
  horario: 'Emergencias las 24 horas, todos los días',
  consulta: 'Consultas con cita, todos los días',
  mapaQuery: 'Barrio Las Magnolias, Tactic, Alta Verapaz, Guatemala',
}

export const mapaEmbed = `https://www.google.com/maps?q=${encodeURIComponent(INFO.mapaQuery)}&output=embed`
export const mapaRuta = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(INFO.mapaQuery)}`

export const SERVICIOS = [
  { icono: 'consulta', titulo: 'Consulta general', texto: 'Atención médica para toda la familia.' },
  { icono: 'pediatria', titulo: 'Pediatría', texto: 'Cuidado de niñas y niños, con dedicación y calidez.' },
  { icono: 'maternidad', titulo: 'Maternidad y partos', texto: 'Acompañamos cada parto con un equipo preparado.' },
  { icono: 'cirugia', titulo: 'Cirugía', texto: 'Cirugía general y procedimientos cuando los necesitas.' },
  { icono: 'emergencias', titulo: 'Emergencias 24 h', texto: 'La puerta de emergencias está disponible a cualquier hora.' },
  { icono: 'rayos', titulo: 'Rayos X y diagnóstico', texto: 'Estudios para orientar un diagnóstico oportuno.' },
]

export const EQUIPO = [
  {
    nombre: 'Dr. Carlos García',
    especialidad: 'Traumatólogo y ortopedista',
    foto: '/img/fotos/carlos.jpg',
    ancho: 560,
    alto: 1120,
    temas: ['Fracturas en niños y adultos', 'Infecciones óseas', 'Lesiones deportivas', 'Reemplazos articulares', 'Emergencias 24/7'],
  },
  {
    nombre: 'Dr. Alex Ajanel',
    especialidad: 'Cirujano general y videolaparoscópico',
    foto: '/img/fotos/alex.jpg',
    ancho: 298,
    alto: 585,
    temas: ['Cirugía general', 'Procedimientos de alta precisión', 'Cirugía videolaparoscópica'],
  },
  {
    nombre: 'Dr. Rony Barrios',
    especialidad: 'Pediatría',
    foto: '/img/fotos/rony.jpg',
    ancho: 590,
    alto: 455,
    temas: ['Atención de niñas y niños', 'Consulta pediátrica con calidez'],
  },
  {
    nombre: 'Dr. Pablo Domínguez y Dr. Geovani Palma',
    especialidad: 'Ginecología y obstetricia',
    foto: '/img/fotos/ginecologia.jpg',
    ancho: 745,
    alto: 447,
    ancha: true,
    temas: ['Atención de partos', 'Acompañamiento durante el parto'],
  },
]

export const STATS = [
  { valor: '24 h', etiqueta: 'emergencias, todos los días' },
  { valor: '6', etiqueta: 'servicios para tu familia' },
  { valor: '5', etiqueta: 'médicos en el equipo' },
]

export const CONFIANZA = [
  'Atendemos a niñas, niños, adolescentes, adultos y adultos mayores.',
  'Un solo lugar para atender a los integrantes de tu familia.',
  'Emergencias durante las 24 horas y consultas con cita.',
]

export const CONSULTA = ['Síntomas leves o crónicos', 'Control de seguimiento', 'Revisión preventiva', 'Resultados que revisar']
export const URGENCIAS = ['Dolor en el pecho', 'Dificultad para respirar', 'Pérdida del conocimiento', 'Fiebre muy alta en bebés']

export const FAQ = [
  { p: '¿Atienden las 24 horas?', r: 'Las emergencias se atienden todos los días, a cualquier hora. Para una consulta conviene agendar por teléfono o WhatsApp.' },
  { p: '¿Necesito cita previa?', r: 'Para consultas, sí: agenda por teléfono o WhatsApp. Las urgencias se atienden sin cita.' },
  { p: '¿A quiénes atienden?', r: 'A niñas, niños, adolescentes, adultos y adultos mayores.' },
  { p: '¿Dónde están ubicados?', r: 'En Barrio Las Magnolias, Tactic, Alta Verapaz.' },
]
