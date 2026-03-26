import type { FeaturedEvent } from '../data/featuredEvents'

type FeaturedEventCardProps = {
  event: FeaturedEvent
}

function FeaturedEventCard({ event }: FeaturedEventCardProps) {
  return (
    <article className="featured-card">
      <span className="featured-category">{event.categoria}</span>
      <h3>{event.titulo}</h3>
      <p className="featured-meta">
        {event.fecha} · {event.lugar}
      </p>
      <p className="featured-description">{event.descripcion}</p>
    </article>
  )
}

export default FeaturedEventCard
