import React from 'react';
import { motion } from 'framer-motion';

function Amenities() {
  return (
    <section className="colors-2">
            <div id="amenities" className="home-grid">
                <motion.img className="amenities-image" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ margin: "-200px", once: true }} alt="Engagement photoshoot at Bonsai Island" src="doftrix.jpg" />
                <motion.h2 className="small-font-4" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ margin: "-100px", once: true }} >ACTIVITIES</motion.h2>
                <motion.p className="paragraph-3" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ margin: "-100px", once: true }} >There’s more to enjoy beyond the shoreline. Challenge friends to a game of beach volleyball, explore the island’s beauty with our guided tours, or paddle along the coast with our kayaks. Unwind with a relaxing massage, test your skills at the pool table, or sing your heart out with karaoke. Whether you’re seeking adventure or relaxation, there’s something for everyone to enjoy.</motion.p>
                <motion.button className="button-4" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} viewport={{ margin: "-50px", once: true }} >LEARN MORE</motion.button>
            </div>
        </section>
  )
}

export default Amenities