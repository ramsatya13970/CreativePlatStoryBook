import { motion } from 'framer-motion'
import { gallery } from '../../content'

export default function InspirationGallery(){
  return (
    <section className="section gallery-section" id="inspiration">
      <div className="section-heading compact">
        <p className="eyebrow">Activation Inspiration</p>
        <h2>Dummy photos for campaigns, stores, social, and seasonal content.</h2>
      </div>
      <div className="gallery-mosaic">
        {gallery.map((image, index) => (
          <motion.figure
            key={`${image}-${index}`}
            className={index % 5 === 0 ? 'wide' : ''}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: (index % 4) * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={image} alt="" />
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
