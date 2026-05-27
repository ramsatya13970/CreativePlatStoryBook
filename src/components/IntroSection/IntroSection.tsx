import { motion } from 'framer-motion'
import { photos } from '../../content'

export default function IntroSection() {
  return (
    <section className="section intro" id="platform">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        <p className="eyebrow">The Setup</p>
        <h2>A platform for everything we say and do.</h2>
        <p>
          Use the platform as the common creative thread across brand, campaign, store, social, and seasonal communication.
          It keeps the work flexible while making every output feel like it belongs to the same world.
        </p>
      </motion.div>

      <div className="intro-grid">
        <motion.div className="feature-panel" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }}>
          <span className="stat">01</span>
          <h3>Start with a real moment</h3>
          <p>Anchor every idea in people, emotion, and context before choosing the format or channel.</p>
        </motion.div>
        <motion.img className="intro-photo tall" src={photos.inclusive} alt="" whileInView={{ scale: 1 }} initial={{ scale: 0.94 }} viewport={{ once: true }} />
        <motion.img className="intro-photo" src={photos.wardrobe} alt="" whileInView={{ scale: 1 }} initial={{ scale: 0.94 }} viewport={{ once: true }} />
        <motion.div className="feature-panel dark" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }}>
          <span className="stat">02</span>
          <h3>Translate, don't repeat</h3>
          <p>Adapt the same idea by channel so outdoor, social, store, and email each feel native.</p>
        </motion.div>
      </div>
    </section>
  )
}
