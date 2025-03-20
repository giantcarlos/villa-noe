import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import NavBar from './NavBar';
import About from './About';
import Rooms from './Rooms';
import Amenities from './Amenities';
import Contact from './Contact';

function Home() {

    const item = {
        hidden: { y: -1000 },
        show: { y: 0 },
        trans: { }
    }

    const item2 = {
        hidden: { y: 12.5, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 1.25,
            staggerChildren: 0.15
          }
        }
      }

    const scrollWithOffset2 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -40; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

  return (
    <>
    <NavBar />
    <motion.section variants={item} initial="hidden" animate="show" transition={{duration: 1, delay: .125}} className="home">
        <motion.div variants={container} initial="hidden" animate="show" className="home-grid">
            <motion.h2 variants={item2} className="small-font" >Cagbalete Island, Philippines</motion.h2>
            <motion.h1 variants={item2} className="large-font" >VILLA NOE BEACH</motion.h1>
            <HashLink className="button" to="#contact" scroll={el => scrollWithOffset2(el)}>
                <motion.button variants={item2} >BOOK NOW</motion.button>
            </HashLink>
            <motion.img variants={item2} className="home-image" alt="Sunrise on Villa Noe Beach sign." src="sunrise.jpg" />
        </motion.div>
    </motion.section>
    <About />
    <Rooms />
    <Amenities />
    <Contact />
    </>
  )
}

export default Home