import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { HashLink } from 'react-router-hash-link';

function NavBar() {

  const [isOpen, setOpen] = useState(false)
    const [active, setActive] = useState('nav-links')
    const navToggle = () => {
        active === 'nav-links' ? setActive('nav-links-active') : setActive('nav-links');
        console.log(active);
      }
    const navOff = () => {
        setActive('nav-links')
        setOpen(false)
    }

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren:.5,
          staggerChildren: 0.1125
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }


    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -80; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const scrollWithOffset2 = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -40; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  const scrollWithOffset3 = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 0; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  const reveal = {
    hidden: { y: -100 },
    show: { y: 0 },
}

  return (
      <motion.nav variants={reveal} initial="hidden" animate="show" transition={{duration: 1.25, delay: 1.5}} className="nav">
        <img alt="Logo of Villa Noe." className="logo-image" src="logo.png" />
        <div className="title">VILLA NOE BEACH</div>
        <div className="hamburger" onClick={navToggle}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <motion.div variants={container} className={active} onClick={navOff}>
                    <motion.HashLink variants={item} to="#" className="links" scroll={el => scrollWithOffset(el)} >HOME</motion.HashLink>
                    <motion.HashLink variants={item} to="#about" className="links" scroll={el => scrollWithOffset3(el)} >ABOUT</motion.HashLink>
                    <motion.HashLink variants={item} to="#rooms" className="links" scroll={el => scrollWithOffset(el)} >ROOMS</motion.HashLink>
                    <motion.HashLink variants={item} to="#amenities" className="links" scroll={el => scrollWithOffset(el)} >AMENITIES</motion.HashLink>
                    <motion.HashLink variants={item} to="#contact" className="links" scroll={el => scrollWithOffset2(el)} >CONTACT</motion.HashLink>
                    <motion.div variants={item} className="webmaster">Website designed and maintained by&nbsp;
                      <a className="portfolio" href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
                    </motion.div>
                </motion.div>
            <div className="numbers">0906-519-7126 / 0921-784-9062</div>
      </motion.nav>
  )
}

export default NavBar