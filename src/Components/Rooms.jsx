import React from 'react';
import { motion } from 'framer-motion';

function Rooms() {

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
    <section id="rooms" className="colors-1">
          <motion.div className="home-grid" variants={container} initial="hidden" whileInView="show" viewport={{ amount: .35, once: true }} >
                <motion.h2 className="small-font-3" variants={item} >OUR ROOMS</motion.h2>
                <motion.p className="paragraph-2" variants={item} >Villa Noe Beach offers a range of accommodations to suit every traveler. Stay in a rustic cottage, wake up to the ocean in a beachfront room, or enjoy the comfort of an air-conditioned space. For a more open experience, relax in an open-air cabana or camp under the stars with our tent options.</motion.p>
                <motion.button className="button-3" variants={item} >LEARN MORE</motion.button>
                <motion.img className="rooms-image" variants={item} alt="Cottages at Villa Noe." src="cottage.jpg" />
          </motion.div>
      </section>
  )
}

export default Rooms