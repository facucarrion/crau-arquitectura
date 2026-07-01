import './Reviews.css'

const reviews = [
  {
    name: 'Noelia Palacio',
    stars: 5,
    text: 'Excelente arquitecto, muy profesional y creativo. Supo entender exactamente lo que buscábamos y el resultado superó nuestras expectativas. Muy recomendable.',
  },
  {
    name: 'Orlando Daniel Pensso',
    stars: 5,
    text: 'Excelente profesionales. Serios, cumplidores y muy predispuestos. Los recomiendo 100%',
  },
  {
    name: 'Victor Manuel Videla',
    stars: 5,
    text: 'Excelente profesional Cristian! Captó mi idea y la potenció. Super recomendable su trabajo.',
  },
]

export default function Reviews() {
  return (
    <section id="resenas" className="reviews">
      <div className="reviews__inner">
        <div className="reviews__header reveal">
          <span className="section-label">Reseñas</span>
          <h2 className="section-title">
            Lo que dicen <em>nuestros clientes</em>
          </h2>
        </div>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <div key={r.name} className={`review-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="review-card__stars">
                {Array.from({ length: r.stars }, (_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 .5l2.2 4.5 4.9.7-3.55 3.5.84 4.9L8 11.8l-4.38 2.3.84-4.9L.9 5.7l4.9-.7L8 .5z"/>
                  </svg>
                ))}
              </div>
              <p className="review-card__text">{r.text}</p>
              <span className="review-card__name">{r.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
