import { motion } from 'framer-motion'
import { navItems, photos } from '../../content'

type HeroVideoProps = {
  onNavigate: (target: string) => void
}

export default function HeroVideo({ onNavigate }: HeroVideoProps) {
  return (
    <section className="hero">
      <img className="hero__image" src={photos.hero} alt="" />
      <div className="hero__scrim" />

      <motion.nav
        className="top-nav"
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <button className="brand-mark" type="button" onClick={() => onNavigate('top')}>IC Creative Platform</button>
        <div className="nav-links">
          {navItems.map((item) => (
            <button key={item.target} type="button" onClick={() => onNavigate(item.target)}>
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>

      <div className="hero__content" id="top">
        <motion.p className="eyebrow" initial={{ y: 18 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
          Creative Platform
        </motion.p>
        <motion.h1 initial={{ y: 32 }} animate={{ y: 0 }} transition={{ delay: 0.32, duration: 0.8 }}>
          Moments you can't get with a click
        </motion.h1>
        <motion.p className="hero__lead" initial={{ y: 24 }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          A single creative system for turning retail, product, people, and seasonal energy into memorable moments of togetherness.
        </motion.p>
        <motion.div className="hero__actions" initial={{ y: 16 }} animate={{ y: 0 }} transition={{ delay: 0.68 }}>
          <button type="button" className="primary-button" onClick={() => onNavigate('guidelines')}>Explore Guidelines</button>
          <button type="button" className="ghost-button" onClick={() => onNavigate('inspiration')}>View Inspiration</button>
        </motion.div>
      </div>

      <motion.div className="hero__ticker" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
        <span>Moment</span><span>Togetherness</span><span>Retail Energy</span><span>Seasonal Sparks</span>
        <span>Moment</span><span>Togetherness</span><span>Retail Energy</span><span>Seasonal Sparks</span>
      </motion.div>
    </section>
  )
}
