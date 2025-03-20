import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Amenities() {

  const item = {
    hidden: { y: 12.5, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.15
      }
    }
  }

  return (
    <section className="colors-2">
            <motion.div id="amenities" className="home-grid" variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }}>
                <motion.img className="amenities-image" variants={item} alt="Engagement photoshoot at Bonsai Island" src="doftrix.jpg" />
                <motion.h2 className="small-font-4" variants={item} >AMENITIES</motion.h2>
                <motion.p className="paragraph-3" variants={item} >There’s more to enjoy beyond the shoreline. Challenge friends to a game of beach volleyball, explore the island’s beauty with our guided tours, or paddle along the coast with our kayaks. Unwind with a relaxing massage, test your skills at the pool table, or sing your heart out with karaoke. Whether you’re seeking adventure or relaxation, there’s something for everyone to enjoy.</motion.p>
                <Link to="/amenities" className="button-4">
                    <motion.button variants={item} >LEARN MORE</motion.button>
                </Link>
            </motion.div>
        </section>
  )
}

export default Amenities