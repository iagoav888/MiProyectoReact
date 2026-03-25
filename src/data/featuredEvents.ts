export type FeaturedEvent = {
  id: number
  categoria: string
  titulo: string
  fecha: string
  lugar: string
  descripcion: string
}

export const featuredEvents: FeaturedEvent[] = [
  {
    id: 1,
    categoria: 'Concierto',
    titulo: 'Noches en el Puerto',
    fecha: '18 abril',
    lugar: 'Muelle de Batería',
    descripcion:
      'Una cita pensada para abrir temporada con directo al aire libre y vista al puerto.',
  },
  {
    id: 2,
    categoria: 'Festival',
    titulo: 'Semana Atlántica',
    fecha: '26 abril',
    lugar: 'Jardines de Méndez Núñez',
    descripcion:
      'Programación cultural con música, actividades creativas y experiencias urbanas.',
  },
  {
    id: 3,
    categoria: 'Escena',
    titulo: 'Escenario Colón',
    fecha: '03 mayo',
    lugar: 'Teatro Colón',
    descripcion:
      'Una selección de propuestas escénicas para una portada con foco editorial.',
  },
]
