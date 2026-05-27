import { motion } from 'framer-motion'
import { guidelines } from '../content'

type GuidelinePageProps = {
  onBack: () => void
}

const copy = guidelines.find((item) => item.page === 'copy')!

const examples = [
  { label: 'Hero line', text: "Moments you can't get with a click" },
  { label: 'Campaign line', text: 'The feeling of finding it together' },
  { label: 'Store prompt', text: 'Come in for the color, stay for the moment' },
]

export default function CopyGuidelines({ onBack }: GuidelinePageProps){
  return (
    <main className="detail-page">
      <button type="button" className="back-button" onClick={onBack}>Back to platform</button>
      <motion.header className="detail-hero copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <img src={copy.image} alt="" />
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.summary}</p>
        </div>
      </motion.header>
      <section className="copy-board">
        {examples.map((item, index) => (
          <motion.article key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
            <span>{item.label}</span>
            <h2>{item.text}</h2>
          </motion.article>
        ))}
      </section>
      <section className="detail-grid two">
        <article className="rule-card strong"><h2>Write like a person</h2><p>Keep copy conversational, concrete, and emotionally direct. Avoid heavy claims, internal language, and over-explaining the concept.</p></article>
        <article className="rule-card"><h2>Channel fit</h2><p>Use shorter, punchier lines for social and outdoor. Use warmer, more useful copy for store, CRM, and guidance moments.</p></article>
      </section>
    </main>
  )
}
