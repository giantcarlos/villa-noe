import React from 'react';
import { motion } from 'framer-motion';

function Contact() {

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
    <section id="contact" className="colors-1">
      <motion.div className="home-grid" variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }}>
              <motion.img className="contact-image" variants={item} alt="Cottages at Villa Noe." src="jump.jpg" />
              <motion.h2 className="small-font-5" variants={item} >BOOK NOW</motion.h2>
              <motion.p className="paragraph-4" variants={item} >For reservations or inquiries, message us on our Facebook page or call us at 0906-519-7126 or 0921-784-9062.</motion.p>
              <motion.a href="https://www.facebook.com/VillaNoeBeach/" target="_blank" className="facebook-image" variants={item}><img src="facebook.png" alt="Find us on facebook banner image." width="300" /></motion.a>
        </motion.div>
    </section>
  )
}

export default Contact