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
            staggerChildren: 0.125
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
                <HashLink to="#" className="links" scroll={el => scrollWithOffset(el)} >
                  <motion.img className="footer-villa" variants={item} alt="Villa Noe logo." src="villablack.png" />
                </HashLink>
                <motion.div variants={item} className="footer-left">
                    <div className="address">Villa Noe Beach</div>
                    <div className="address">Cagbalete Island</div>
                    <div className="address">Mauban, Quezon</div>
                    <div className="address">Philippines</div>
                </motion.div>
                  <motion.div className="footer-mid" variants={item} >
                        <HashLink to="#" className="footer-links" scroll={el => scrollWithOffset(el)} >Home</HashLink>
                        <HashLink to="#about" className="footer-links" scroll={el => scrollWithOffset3(el)} >About</HashLink>
                        <HashLink to="#rooms" className="footer-links" scroll={el => scrollWithOffset(el)} >Rooms</HashLink>
                        <HashLink to="#amenities" className="footer-links" scroll={el => scrollWithOffset(el)} >Amenities</HashLink>
                        <HashLink to="#contact" className="footer-links" scroll={el => scrollWithOffset2(el)} >Contact</HashLink>
                    </motion.div>
                    <motion.div variants={item} className="footer-right">
                        <div className="follow">Follow us</div>
                        <div className="icon-container">
                        <a className="details-link" href='https://www.facebook.com/VillaNoeBeach/' target="_blank">
                        <img className="footer-icon" variants={item} alt="Facebook icon." src="fb.png" />
                        </a>
                        <a className="details-link" href='https://www.instagram.com/villanoebeachresort/' target="_blank">
                            <img className="footer-icon" variants={item} alt="Instagram icon." src="insta.png" />
                        </a>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className="footer-last">
                    <HashLink to="#" className="footer-arrow" scroll={el => scrollWithOffset(el)} >⬆︎</HashLink>
                    </motion.div>
                    <motion.div variants={item} className="footer-bottom">
                        <div className="copyright">© Copyright 2025 Villa Noe Beach</div>
                    </motion.div>
                    <motion.div variants={item} className="footer-dev">
                        <div >Website designed and maintained by&nbsp;
                            <a className="details-link"href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
                        </div>
                    </motion.div>
            </motion.div>
        </section>
      )
    }

export default Footer