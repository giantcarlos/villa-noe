import React from 'react';
import { motion } from 'framer-motion';

function Rooms() {
  return (
    <section className="rooms">
          <div className="home-grid">
                <motion.img initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-200px", once: true }} className="rooms-image" alt="Sunrise on Villa Noe Beach sign." src="cottage.jpg" />
                <motion.h2 className="small-font" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} >OUR ROOMS</motion.h2>
                <motion.p className="paragraph-2" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} ></motion.p>
                <motion.button className="button" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} viewport={{ margin: "-50px", once: true }} >LEARN MORE</motion.button>
          </div>
      </section>
  )
}

export default Rooms