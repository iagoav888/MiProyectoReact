import './App.css'
import CollectionsSection from './components/CollectionsSection'
import FeaturedSection from './components/FeaturedSection'
import HeroOverviewSection from './components/HeroOverviewSection'
import VenuesSection from './components/VenuesSection'

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

      <HeroOverviewSection />
      <FeaturedSection />
      <CollectionsSection />
      <VenuesSection />
    </main>
  )
}

export default App
