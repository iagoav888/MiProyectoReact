import { useState } from 'react'
import './App.css'
import FeaturedEventCard from './components/FeaturedEventCard'
import { featuredEvents } from './data/featuredEvents'

const categories = ['Todos', 'Concierto', 'Festival', 'Escena'] as const

function App() {
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
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">CV</span>
          <div>
            <strong>Coruña Vibra</strong>
            <p>Agenda cultural y musical de A Coruña</p>
          </div>
        </div>

        <span className="status-badge">Selección local</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Agenda destacada</p>
          <h1>
            Encuentra conciertos, festivales y planes culturales en una sola
            interfaz
          </h1>
          <p className="intro">
            Una propuesta visual pensada para explorar eventos de forma clara,
            rápida y con una identidad digital contemporánea.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#overview">
              Explorar portada
            </a>
            <span className="secondary-note">
              Diseño enfocado en descubrimiento y claridad
            </span>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Vista general</p>
          <strong>Cultura en primer plano</strong>
          <span>
            Una home pensada para presentar eventos, contexto y contenido
            destacado.
          </span>
        </aside>
      </section>

      <section className="overview" id="overview">
        <article className="overview-card">
          <span className="overview-value">01</span>
          <h2>Portada principal</h2>
          <p>
            Una entrada clara para presentar la propuesta y captar la atención.
          </p>
        </article>

        <article className="overview-card">
          <span className="overview-value">02</span>
          <h2>Jerarquía visual</h2>
          <p>Tipografía, color y espaciado definidos para mejorar la lectura.</p>
        </article>

        <article className="overview-card">
          <span className="overview-value">03</span>
          <h2>Base escalable</h2>
          <p>
            Estructura preparada para integrar datos, filtros y tarjetas de
            eventos.
          </p>
        </article>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selección destacada</p>
            <h2>Primeros eventos en portada</h2>
          </div>
          <p className="section-copy">
            Un bloque inicial de contenido para empezar a construir la
            experiencia de descubrimiento.
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
    </main>
  )
}

export default App
