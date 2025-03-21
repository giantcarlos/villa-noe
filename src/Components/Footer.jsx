import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  
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
        <section id="contact" className="colors-2">
          <motion.div className="home-grid" variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }}>
                  <motion.div variants={item} className="footer-links" >
                        <HashLink to="#" className="links" scroll={el => scrollWithOffset(el)} >HOME</HashLink>
                        <HashLink to="#about" className="links" scroll={el => scrollWithOffset3(el)} >ABOUT</HashLink>
                        <HashLink to="#rooms" className="links" scroll={el => scrollWithOffset(el)} >ROOMS</HashLink>
                        <HashLink to="#amenities" className="links" scroll={el => scrollWithOffset(el)} >AMENITIES</HashLink>
                        <HashLink to="#contact" className="links" scroll={el => scrollWithOffset2(el)} >CONTACT</HashLink>
                    </motion.div>
            </motion.div>
        </section>
      )
    }

export default Footer