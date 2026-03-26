import { curatedCollections } from '../data/curatedCollections'

function CollectionsSection() {
  return (
    <section className="collections-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Colecciones</p>
          <h2>Explora la agenda desde distintos enfoques</h2>
        </div>
        <p className="section-copy">
          Un bloque adicional para convertir la home en una experiencia más
          editorial y menos lineal.
        </p>
      </div>

      <div className="collections-grid">
        {curatedCollections.map((collection) => (
          <article className="collection-card" key={collection.id}>
            <span className="collection-label">{collection.etiqueta}</span>
            <h3>{collection.titulo}</h3>
            <p>{collection.resumen}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollectionsSection
