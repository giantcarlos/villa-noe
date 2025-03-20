import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {

  return (
    <section id="about"className="colors-2">
            <div className="home-grid">
                <motion.img className="about-image" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ margin: "-200px", once: true }} alt="Aerial view of Cagbalete Island." src="cagbalete.jpg" />
                <motion.h2 className="small-font-2" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ margin: "-100px", once: true }} >WELCOME TO VILLA NOE BEACH</motion.h2>
                <motion.p className="paragraph" initial={{ opacity: 0, y: 65 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ margin: "-100px", once: true }} >Nestled on the pristine shores of Cagbalete Island in Mauban, Quezon, Villa Noe Beach offers a peaceful retreat with clear waters, white sand, and breathtaking sunrises. Whether you’re here to unwind by the beach, explore the island’s marine life, or simply enjoy the tranquility, our resort provides a comfortable and scenic escape from the everyday.</motion.p>
                <Link to="/about">
                <motion.button className="button-2" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} viewport={{ margin: "-50px", once: true }} >LEARN MORE</motion.button>
                </Link>
            </div>
        </section>
  )
}

export default About