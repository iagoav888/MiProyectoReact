import { featuredVenues } from '../data/featuredVenues'

function VenuesSection() {
  return (
    <section className="venues-section" id="venues">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Espacios</p>
          <h2>Lugares clave para moverse por la agenda</h2>
        </div>
        <p className="section-copy">
          Otra capa de navegación para orientar la experiencia hacia sitios y
          zonas reconocibles de la ciudad.
        </p>
      </div>

      <div className="venues-grid">
        {featuredVenues.map((venue) => (
          <article className="venue-card" key={venue.id}>
            <span className="venue-zone">{venue.zona}</span>
            <h3>{venue.nombre}</h3>
            <p>{venue.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default VenuesSection
