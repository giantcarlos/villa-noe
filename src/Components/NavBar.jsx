import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';

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
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

  return (
    <nav>
      <motion.div variants={reveal} initial="hidden" animate="show" transition={{duration: 1, delay: 1}} className="nav">
        <img alt="Logo of Villa Noe." className="logo-image" src="logo.png" />
        <div className="numbers">0906-519-7126 / 0921-784-9062</div>
        <div className="hamburger" onClick={navToggle}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <div className={active} onClick={navOff}>
                    {/* <HashLink smooth to="#" className="links" scroll={el => scrollWithOffset(el)}>HOME ➤</HashLink>
                    <HashLink smooth to="#lineup" className="links" scroll={el => scrollWithOffset2(el)}>LINEUP ➤</HashLink>
                    <HashLink smooth to="#tickets" className="links" scroll={el => scrollWithOffset(el)}>TICKETS ➤</HashLink>
                    <HashLink smooth to="#merch" className="links" scroll={el => scrollWithOffset(el)}>MERCH ➤</HashLink>
                    <HashLink smooth to="#press" className="links" scroll={el => scrollWithOffset3(el)}>PRESS ➤</HashLink> */}
                </div>
      </motion.div>
    </nav>
  )
}

export default NavBar