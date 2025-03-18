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

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -65; 
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
                <div className={active} onClick={navOff}>
                    <HashLink to="#" className="links" scroll={el => scrollWithOffset(el)} >HOME</HashLink>
                    <HashLink to="#about" className="links" scroll={el => scrollWithOffset3(el)} >ABOUT</HashLink>
                    <HashLink to="#rooms" className="links" scroll={el => scrollWithOffset(el)} >ROOMS</HashLink>
                    <HashLink to="#amenities" className="links" scroll={el => scrollWithOffset(el)} >AMENITIES</HashLink>
                    <HashLink to="#contact" className="links" scroll={el => scrollWithOffset2(el)} >CONTACT</HashLink>
                    <div className="webmaster">Website designed and maintained by&nbsp;
                      <a className="portfolio"href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
                    </div>
                </div>
            <div className="numbers">0906-519-7126 / 0921-784-9062</div>
      </motion.nav>
  )
}

export default NavBar