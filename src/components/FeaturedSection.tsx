import { useState } from 'react'
import FeaturedEventCard from './FeaturedEventCard'
import { featuredEvents } from '../data/featuredEvents'

const categories = ['Todos', 'Concierto', 'Festival', 'Escena'] as const

function FeaturedSection() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const visibleEvents = featuredEvents.filter((event) => {
    const matchesCategory =
      activeCategory === 'Todos' || event.categoria === activeCategory

    const searchableText =
      `${event.titulo} ${event.lugar} ${event.descripcion}`.toLowerCase()
    const matchesSearch = searchableText.includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <section className="featured-section" id="featured">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selección destacada</p>
          <h2>Primeros eventos en portada</h2>
        </div>
        <p className="section-copy">
          Un bloque inicial de contenido para empezar a construir la experiencia
          de descubrimiento.
        </p>
      </div>

      <div className="search-box">
        <label htmlFor="event-search">Buscar por título, lugar o descripción</label>
        <input
          id="event-search"
          type="text"
          placeholder="Ejemplo: puerto, Colón o música"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div
        className="filter-row"
        aria-label="Filtrar eventos destacados por categoría"
      >
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category ? 'filter-chip active' : 'filter-chip'
            }
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="featured-grid">
        {visibleEvents.length > 0 ? (
          visibleEvents.map((event) => (
            <FeaturedEventCard key={event.id} event={event} />
          ))
        ) : (
          <article className="empty-state">
            <h3>Sin resultados</h3>
            <p>Prueba otra búsqueda o cambia la categoría activa.</p>
          </article>
        )}
      </div>
    </section>
  )
}

export default FeaturedSection
