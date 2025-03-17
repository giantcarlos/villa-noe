import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="colors-1">
      <div className="home-grid">
              <motion.img className="contact-image" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-200px", once: true }} alt="Cottages at Villa Noe." src="jump.jpg" />
              <motion.h2 className="small-font-5" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} >BOOK NOW</motion.h2>
              <motion.p className="paragraph-3" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.125 }} viewport={{ margin: "-100px", once: true }} >For reservations or inquiries, message us on our Facebook page or call us at 0906-519-7126 or 0921-784-9062.</motion.p>
              <motion.img className="facebook-image" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} viewport={{ margin: "-50px", once: true }} alt="Find us on facebook banner image." src="facebook.png" />
        </div>
    </section>
  )
}

export default Contact