import { motion } from 'framer-motion'
import { momentCards, platformPillars } from '../../content'

export default function WhyPlatform(){
  return (
    <>
      <section className="section pillar-section">
        <div className="section-heading compact">
          <p className="eyebrow">Why It Works</p>
          <h2>Simple rules, strong consistency.</h2>
        </div>
        <div className="pillars">
          {platformPillars.map((item, index) => (
            <motion.article
              className="pillar-card"
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section moments-section" id="moments">
        <div className="section-heading compact">
          <p className="eyebrow">Moment System</p>
          <h2>Build from emotion, then scale into channels.</h2>
        </div>
        <div className="moment-grid">
          {momentCards.map((item, index) => (
            <motion.article
              className="moment-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
