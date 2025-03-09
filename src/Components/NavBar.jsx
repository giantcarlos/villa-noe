import React from 'react';
import { motion } from 'framer-motion';

function NavBar() {

  const reveal = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

  return (
    <nav>
      <motion.div variants={reveal} initial="hidden" animate="show" transition={{duration: 1, delay: 1}} className="nav">
        <img alt="Logo of Villa Noe." className="logo-image" src="logo.png" />
        <div className="numbers">0906-519-7126 / 0921-784-9062</div>
      </motion.div>
    </nav>
  )
}

export default NavBar