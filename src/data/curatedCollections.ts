export type CuratedCollection = {
  id: number
  etiqueta: string
  titulo: string
  resumen: string
}

export const curatedCollections: CuratedCollection[] = [
  {
    id: 1,
    etiqueta: 'Ruta urbana',
    titulo: 'Planes por el centro cultural',
    resumen:
      'Una selección pensada para combinar música en directo, paseo y espacios emblemáticos.',
  },
  {
    id: 2,
    etiqueta: 'Fin de semana',
    titulo: 'Propuestas para salir sin improvisar',
    resumen:
      'Ideas rápidas para encontrar un plan con contexto visual y una navegación sencilla.',
  },
  {
    id: 3,
    etiqueta: 'Descubrimiento',
    titulo: 'Eventos con foco editorial',
    resumen:
      'Bloques diseñados para destacar actividades con personalidad y facilitar la exploración.',
  },
]
