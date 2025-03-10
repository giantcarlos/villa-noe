import React from 'react';
import { motion } from 'framer-motion';

function About() {

  const reveal = {
    hidden: { x: 75, opacity: 0 },
    show: { x: 0, opacity: 1 },
  }

  const item = {
    hidden: { y: -1000 },
    show: { y: 0 },
    trans: { }
  }
  const item2 = {
    hidden: { y: 25, opacity:0 },
    show: { y: 0, opacity: 1 },
  }
  const item3 = {
    hidden: { y: 10, opacity:0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section className="about">
            <div className="home-grid">
                <motion.img variants={reveal} initial="hidden" animate="show" transition={{duration: .375, delay:1.7}} className="about-image" alt="Sunrise on Villa Noe Beach sign." src="cagbalete.jpg" />
                <motion.h2 className="small-font-2" variants={item3} initial="hidden" animate="show" transition={{duration: .25, delay:1.325}}>WELCOME TO VILLA NOE BEACH</motion.h2>
                <motion.p className="paragraph" variants={item2} initial="hidden" animate="show" transition={{duration: .5, delay:1.375}}>Nestled on the pristine shores of Cagbalete Island in Mauban, Quezon, Villa Noe Beach offers a peaceful retreat with clear waters, white sand, and breathtaking sunrises. Whether you’re here to unwind by the beach, explore the island’s marine life, or simply enjoy the tranquility, our resort provides a comfortable and scenic escape from the everyday.</motion.p>
                <motion.button className="button-2" variants={item2} initial="hidden" animate="show" transition={{duration: .5, delay:1.5}}>LEARN MORE</motion.button>
            </div>
        </section>
  )
}

export default About