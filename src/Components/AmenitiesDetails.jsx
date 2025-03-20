import { React, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AmenitiesDetails() {

  useEffect(()=>{
              window.scrollTo(0, 0);
            },[])
      
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
                  staggerChildren: 0.125
                }
              }
            }

  return (
    <motion.section variants={item} initial="hidden" animate="show" transition={{duration: 1, delay: .25}} className="colors-2">
            <motion.div variants={container} initial="hidden" animate="show" className="details">
                <motion.div variants={item2}>
                    <Link className="return" to="/">← Return to home</Link>
                </motion.div>
                <motion.div variants={item2} className="details-title">Amenities and Resort Activities</motion.div>
                <motion.div variants={item2}>
                  <ul>Beach Volleyball - 100/hour</ul>
                  <ul>Billiards - 300/hour</ul>
                  <ul>Catering - Varies*</ul>
                  <ul>Frisbee - 50/hour</ul>
                  <ul>Island Tours - Varies*</ul>
                  <ul>Massage - 400</ul>
                  <ul>Kayaks - 300/hour</ul>
                  <ul>Paddleboards - 250/hour</ul>
                  <ul>Skimboards - 200/hour</ul>
                  <ul>*For the latest prices and availability, send us a message on&nbsp;
                  <a className="details-link" href='https://www.facebook.com/VillaNoeBeach/' target="_blank">Facebook</a> or call us at 0906-519-7126 / 0921-784-9062.</ul>
                </motion.div>
            </motion.div>
      </motion.section>
  )
}

export default AmenitiesDetails