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
    
      return (
        <section id="contact" className="colors-2">
          <motion.div className="footer-grid" variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }}>
                  <motion.div variants={item} >
                        <HashLink to="#" className="footer-links" scroll={el => scrollWithOffset(el)} >Home</HashLink>
                        <HashLink to="#about" className="footer-links" scroll={el => scrollWithOffset3(el)} >About</HashLink>
                        <HashLink to="#rooms" className="footer-links" scroll={el => scrollWithOffset(el)} >Rooms</HashLink>
                        <HashLink to="#amenities" className="footer-links" scroll={el => scrollWithOffset(el)} >Amenities</HashLink>
                        <HashLink to="#contact" className="footer-links" scroll={el => scrollWithOffset2(el)} >Contact</HashLink>
                    </motion.div>
            </motion.div>
        </section>
      )
    }

export default Footer