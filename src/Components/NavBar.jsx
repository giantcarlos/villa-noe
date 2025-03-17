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
                    <HashLink to="#" className="links" >HOME ➤</HashLink>
                    <HashLink to="#lineup" className="links" >LINEUP ➤</HashLink>
                    <HashLink to="#tickets" className="links" >TICKETS ➤</HashLink>
                    <HashLink to="#merch" className="links" >MERCH ➤</HashLink>
                    <HashLink to="#press" className="links" >PRESS ➤</HashLink>
                </div>
            <div className="numbers">0906-519-7126 / 0921-784-9062</div>
      </motion.nav>
  )
}

export default NavBar