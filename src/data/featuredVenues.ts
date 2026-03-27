export type FeaturedVenue = {
  id: number
  nombre: string
  zona: string
  descripcion: string
}

export const featuredVenues: FeaturedVenue[] = [
  {
    id: 1,
    nombre: 'Teatro Colón',
    zona: 'Centro',
    descripcion:
      'Un espacio clave para propuestas escénicas, conciertos de formato medio y programación cultural constante.',
  },
  {
    id: 2,
    nombre: 'Muelle de Batería',
    zona: 'Puerto',
    descripcion:
      'Ideal para eventos al aire libre, activaciones temporales y experiencias con una atmósfera más abierta.',
  },
  {
    id: 3,
    nombre: 'Jardines de Méndez Núñez',
    zona: 'Ensanche',
    descripcion:
      'Un punto muy reconocible para festivales urbanos, citas creativas y recorridos culturales de fin de semana.',
  },
]
