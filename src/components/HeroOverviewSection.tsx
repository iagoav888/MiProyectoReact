const overviewItems = [
  {
    id: '01',
    title: 'Portada principal',
    description:
      'Una entrada clara para presentar la propuesta y captar la atención.',
  },
  {
    id: '02',
    title: 'Jerarquía visual',
    description:
      'Tipografía, color y espaciado definidos para mejorar la lectura.',
  },
  {
    id: '03',
    title: 'Base escalable',
    description:
      'Estructura preparada para integrar datos, filtros y tarjetas de eventos.',
  },
]

function HeroOverviewSection() {
  return (
    <>
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
        {overviewItems.map((item) => (
          <article className="overview-card" key={item.id}>
            <span className="overview-value">{item.id}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default HeroOverviewSection
