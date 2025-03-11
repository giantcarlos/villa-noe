import React from 'react';
import { motion } from 'framer-motion';

function Home() {

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
        hidden: { y: 45, opacity:0 },
        show: { y: 0, opacity: 1 },
    }
    const item3 = {
        hidden: { y: 30, opacity:0 },
        show: { y: 0, opacity: 1 },
      }

  return (
    <motion.section variants={item} initial="hidden" animate="show" transition={{duration: 1.25, delay: .125}} className="home">
        <div className="home-grid">
            <motion.img variants={reveal} initial="hidden" animate="show" transition={{duration: .625, delay: 1.75}}className="home-image" alt="Sunrise on Villa Noe Beach sign." src="sunrise.jpg" />
            <motion.h2 className="small-font" variants={item3} initial="hidden" animate="show" transition={{duration: .35, delay:1.325}}>Cagbalete Island, Philippines</motion.h2>
            <motion.h1 className="large-font" variants={item2} initial="hidden" animate="show" transition={{duration: .6, delay:1.375}}>VILLA NOE BEACH</motion.h1>
            <motion.button className="button" variants={item2} initial="hidden" animate="show" transition={{duration: .7, delay:1.5}}>BOOK NOW</motion.button>
        </div>
    </motion.section>
  )
}

export default Home