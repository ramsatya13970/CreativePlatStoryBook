import { motion } from 'framer-motion'
import type { GuidelinePage } from '../../App'
import { guidelines } from '../../content'

type GuidelineScrollerProps = {
  onSelectGuideline: (page: GuidelinePage) => void
}

export default function GuidelineScroller({ onSelectGuideline }: GuidelineScrollerProps) {
  return (
    <section className="section guidelines-section" id="guidelines">
      <div className="section-heading compact">
        <p className="eyebrow">Guidelines</p>
        <h2>Choose a lane and keep the work aligned.</h2>
      </div>
      <div className="guideline-grid">
        {guidelines.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => onSelectGuideline(item.page)}
            className="guideline-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={item.image} alt="" />
            <span>{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
