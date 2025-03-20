import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {

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
    <section id="about"className="colors-2">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .35, once: true }} className="home-grid">
                <motion.img variants={item} className="about-image"  alt="Aerial view of Cagbalete Island." src="cagbalete.jpg" />
                <motion.h2 variants={item} className="small-font-2"  >WELCOME TO VILLA NOE BEACH</motion.h2>
                <motion.p variants={item} className="paragraph"  >Nestled on the pristine shores of Cagbalete Island in Mauban, Quezon, Villa Noe Beach offers a peaceful retreat with clear waters, white sand, and breathtaking sunrises. Whether you’re here to unwind by the beach, explore the island’s marine life, or simply enjoy the tranquility, our resort provides a comfortable and scenic escape from the everyday.</motion.p>
                <Link to="/about" className="button-2">
                <motion.button variants={item} >LEARN MORE</motion.button>
                </Link>
            </motion.div>
        </section>
  )
}

export default About