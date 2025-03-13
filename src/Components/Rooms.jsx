import React from 'react';
import { motion } from 'framer-motion';

function Rooms() {
  return (
    <section className="colors-1">
          <div className="home-grid">
                <motion.img className="rooms-image" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-200px", once: true }} alt="Cottages at Villa Noe." src="cottage.jpg" />
                <motion.h2 className="small-font-3" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} >OUR ROOMS</motion.h2>
                <motion.div className="bullets" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} >
                  <ul>RUSTIC COTTAGES</ul>
                  <ul>BEACHFRONT VIEWS</ul>
                  <uL>AIR CONDITIONED ROOMS</uL>
                  <ul>OPEN AIR CABANAS</ul>
                  <ul>CAMPING TENTS</ul>
                </motion.div>
                <motion.button className="button-3" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} viewport={{ margin: "-50px", once: true }} >LEARN MORE</motion.button>
          </div>
      </section>
  )
}

export default Rooms