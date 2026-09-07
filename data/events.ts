export type EventItem = {
  date: string
  month: string
  title: string
  place: string
  category: string
  description: string
  image: string
  imageAlt: string
  registrationUrl: string
  registrationLabel?: string
  registrationEmbedUrl?: string
}

export const events: EventItem[] = [
  { date: '07', month: 'JUN', title: 'Noche de las estrellas', place: 'Pozoblanco · 18 km', category: 'Naturaleza', description: 'Paseo nocturno por la dehesa y observación del cielo limpio de Los Pedroches.', image: '/agenda-pedroches.png', imageAlt: 'Noche de verano en un pueblo del Valle de los Pedroches', registrationUrl: 'https://example.com/noche-estrellas', registrationLabel: 'Apuntarme', registrationEmbedUrl: 'https://example.com/noche-estrellas/registro' },
  { date: '15', month: 'JUN', title: 'Mercado de artesanía', place: 'Villanueva de Córdoba · 24 km', category: 'Cultura', description: 'Cerámica, cestería y oficios de siempre en la plaza del pueblo.', image: '/agenda-pedroches.png', imageAlt: 'Mercado artesanal en una plaza de Los Pedroches', registrationUrl: 'https://example.com/mercado-artesania', registrationLabel: 'Ver detalles' },
  { date: '22', month: 'JUN', title: 'Sabores de la dehesa', place: 'Hinojosa del Duque · 31 km', category: 'Gastronomía', description: 'Jornada dedicada al queso, el aceite y los productos de la comarca.', image: '/agenda-pedroches.png', imageAlt: 'Fiesta gastronómica en el Valle de los Pedroches', registrationUrl: 'https://example.com/sabores-dehesa', registrationLabel: 'Reservar plaza' },
  { date: '29', month: 'JUN', title: 'Sendero del granito', place: 'El Guijo · 12 km', category: 'Naturaleza', description: 'Ruta guiada entre encinas, arroyos y antiguas canteras de granito.', image: '/agenda-pedroches.png', imageAlt: 'Sendero entre encinas y granito', registrationUrl: 'https://example.com/sendero-granito', registrationLabel: 'Inscribirme' },
]
