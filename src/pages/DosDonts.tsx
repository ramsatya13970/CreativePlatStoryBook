import { motion } from 'framer-motion'
import { guidelines, photos } from '../content'

type GuidelinePageProps = {
  onBack: () => void
}

const dosDonts = guidelines.find((item) => item.page === 'dos-donts')!

const rows = [
  { do: 'Show real togetherness and natural expressions.', dont: 'Use cold, isolated product shots as the main story.' },
  { do: 'Keep scenes bright, tactile, and full of retail context.', dont: 'Make images feel overly staged, flat, or anonymous.' },
  { do: 'Translate the idea per channel and audience need.', dont: 'Copy-paste the same message everywhere.' },
  { do: 'Let seasonal work feel fresh while staying in-platform.', dont: 'Create one-off looks that break the system.' },
]

export default function DosDonts({ onBack }: GuidelinePageProps){
  return (
    <main className="detail-page">
      <button type="button" className="back-button" onClick={onBack}>Back to platform</button>
      <motion.header className="detail-hero" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <img src={dosDonts.image} alt="" />
        <div>
          <p className="eyebrow">{dosDonts.eyebrow}</p>
          <h1>{dosDonts.title}</h1>
          <p>{dosDonts.summary}</p>
        </div>
      </motion.header>
      <section className="dos-board">
        {rows.map((row, index) => (
          <motion.article key={row.do} initial={{ opacity: 0, x: index % 2 ? 24 : -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }}>
            <div><span>Do</span><p>{row.do}</p></div>
            <div><span>Don't</span><p>{row.dont}</p></div>
          </motion.article>
        ))}
      </section>
      <div className="detail-photo-strip">
        {[photos.beauty, photos.family, photos.drinks].map((image) => <img src={image} alt="" key={image} />)}
      </div>
    </main>
  )
}
