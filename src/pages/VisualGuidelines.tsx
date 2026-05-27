import { motion } from 'framer-motion'
import { guidelines, photos } from '../content'

type GuidelinePageProps = {
  onBack: () => void
}

const visual = guidelines.find((item) => item.page === 'visual')!

export default function VisualGuidelines({ onBack }: GuidelinePageProps){
  return (
    <main className="detail-page">
      <button type="button" className="back-button" onClick={onBack}>Back to platform</button>
      <motion.header className="detail-hero" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <img src={visual.image} alt="" />
        <div>
          <p className="eyebrow">{visual.eyebrow}</p>
          <h1>{visual.title}</h1>
          <p>{visual.summary}</p>
        </div>
      </motion.header>
      <section className="detail-grid">
        <article className="rule-card strong"><h2>Photography</h2><p>Use energetic people-first imagery with a lived-in retail context. Faces can be cropped, close, playful, and imperfect as long as the moment feels genuine.</p></article>
        <article className="rule-card"><h2>Composition</h2><p>Lean into bold crops, diagonal movement, layered foregrounds, and a sense that the viewer is part of the scene.</p></article>
        <article className="rule-card"><h2>Color</h2><p>Keep palettes optimistic and bright. Let yellow, green, warm red, and deep contrast carry campaign energy without becoming one-note.</p></article>
        <article className="rule-card photo"><img src={photos.outdoor} alt="" /></article>
      </section>
    </main>
  )
}
