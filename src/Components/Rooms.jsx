import React from 'react';
import { motion } from 'framer-motion';

function Rooms() {
  return (
    <section id="rooms" className="colors-1">
          <div className="home-grid">
                <motion.img className="rooms-image" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-200px", once: true }} alt="Cottages at Villa Noe." src="cottage.jpg" />
                <motion.h2 className="small-font-3" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} >OUR ROOMS</motion.h2>
                <motion.p className="paragraph-2" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} >Villa Noe Beach offers a range of accommodations to suit every traveler. Stay in a rustic cottage, wake up to the ocean in a beachfront room, or enjoy the comfort of an air-conditioned space. For a more open experience, relax in an open-air cabana or camp under the stars with our tent options.</motion.p>
                <motion.button className="button-3" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} viewport={{ margin: "-50px", once: true }} >LEARN MORE</motion.button>
          </div>
      </section>
  )
}

export default Rooms