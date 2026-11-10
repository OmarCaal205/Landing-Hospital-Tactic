export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

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
  { titulo: 'Urgencias 24 horas', texto: 'Triage, estabilización y observación. La puerta de emergencias no cierra.', imagen: asset('img/hospital/urgencias.jpg') },
  { titulo: 'Hospitalización', texto: 'Camas de medicina, cirugía, pediatría y maternidad, con enfermería de turno.', imagen: asset('img/hospital/hospitalizacion.jpg') },
  { titulo: 'Maternidad y partos', texto: 'Control prenatal, trabajo de parto, atención del parto y puerperio.', imagen: asset('img/hospital/maternidad.jpg') },
  { titulo: 'Pediatría', texto: 'Consulta, control de crecimiento y hospitalización de niñas y niños.', imagen: asset('img/hospital/pediatria.jpg') },
  { titulo: 'Cirugía', texto: 'Quirófano para cirugía general, programada y de urgencia, incluida la videolaparoscópica.', imagen: asset('img/hospital/quirofano.jpg') },
  { titulo: 'Traumatología', texto: 'Fracturas, lesiones y seguimiento de ortopedia en consulta y hospitalización.', imagen: asset('img/hospital/traumatologia.jpg') },
  { titulo: 'Laboratorio clínico', texto: 'Hematología, química sanguínea y examen de orina para decidir el tratamiento.', imagen: asset('img/hospital/laboratorio.jpg') },
  { titulo: 'Rayos X y ultrasonido', texto: 'Imagen para urgencias, control prenatal, abdomen y traumatismos.', imagen: asset('img/hospital/imagenologia.jpg') },
]

export const APOYO = [
  { titulo: 'Consulta externa', texto: 'Medicina general, control de crónicos y seguimiento con cita.' },
  { titulo: 'Farmacia', texto: 'Medicamentos de uso hospitalario y tratamiento al egreso.' },
  { titulo: 'Enfermería 24 horas', texto: 'Turnos continuos en urgencias, salas y maternidad.' },
  { titulo: 'Vacunación', texto: 'Esquema infantil y refuerzos para adultos.' },
]

export const EQUIPO = [
  {
    nombre: 'Dr. Carlos García',
    especialidad: 'Traumatólogo y ortopedista',
    foto: asset('img/fotos/carlos.jpg'),
    ancho: 560,
    alto: 1120,
    temas: ['Fracturas en niños y adultos', 'Infecciones óseas', 'Lesiones deportivas', 'Reemplazos articulares', 'Emergencias 24/7'],
  },
  {
    nombre: 'Dr. Alex Ajanel',
    especialidad: 'Cirujano general y videolaparoscópico',
    foto: asset('img/fotos/alex.jpg'),
    ancho: 298,
    alto: 585,
    temas: ['Cirugía general', 'Procedimientos de alta precisión', 'Cirugía videolaparoscópica'],
  },
  {
    nombre: 'Dr. Rony Barrios',
    especialidad: 'Pediatría',
    foto: asset('img/fotos/rony.jpg'),
    ancho: 590,
    alto: 455,
    temas: ['Atención de niñas y niños', 'Consulta pediátrica con calidez'],
  },
  {
    nombre: 'Dr. Pablo Domínguez y Dr. Geovani Palma',
    especialidad: 'Ginecología y obstetricia',
    foto: asset('img/fotos/ginecologia.jpg'),
    ancho: 745,
    alto: 447,
    ancha: true,
    temas: ['Atención de partos', 'Acompañamiento durante el parto'],
  },
]

export const STATS = [
  { valor: '24 h', etiqueta: 'urgencias y enfermería' },
  { valor: '12', etiqueta: 'áreas de un hospital general' },
  { valor: '5', etiqueta: 'especialistas en el equipo' },
]

export const CONFIANZA = [
  'Urgencias, hospitalización, partos y cirugía en un mismo lugar.',
  'Laboratorio, rayos X y ultrasonido para no salir a buscar el estudio.',
  'Consulta con cita para el control, y puerta abierta si es una urgencia.',
]

export const CONSULTA = ['Síntomas leves o crónicos', 'Control de seguimiento', 'Revisión preventiva', 'Resultados que revisar']
export const URGENCIAS = ['Dolor en el pecho', 'Dificultad para respirar', 'Pérdida del conocimiento', 'Fiebre muy alta en bebés']

export const FAQ = [
  { p: '¿Atienden las 24 horas?', r: 'Urgencias y enfermería, sí, todos los días y a cualquier hora. La consulta externa se agenda.' },
  { p: '¿Tienen hospitalización?', r: 'Sí. Hay camas para medicina, cirugía, pediatría y maternidad. En urgencias se decide si la persona debe quedarse.' },
  { p: '¿Hacen laboratorio y ultrasonido?', r: 'Sí. Laboratorio clínico, rayos X y ultrasonido, incluidos los controles prenatales.' },
  { p: '¿Necesito cita previa?', r: 'Para consulta externa, sí: agenda por teléfono o WhatsApp. Las urgencias y los partos en curso se atienden sin cita.' },
  { p: '¿A quiénes atienden?', r: 'A niñas, niños, adolescentes, adultos y adultos mayores.' },
  { p: '¿Dónde están ubicados?', r: 'En Barrio Las Magnolias, Tactic, Alta Verapaz.' },
]
