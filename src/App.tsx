import './App.css'
import CollectionsSection from './components/CollectionsSection'
import FeaturedSection from './components/FeaturedSection'

function App() {
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

      <FeaturedSection />
      <CollectionsSection />
    </main>
  )
}

export default App
