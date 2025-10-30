import { React, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function RoomsDetails() {

    useEffect(()=>{
            window.scrollTo(0, 0);
          },[])
    
        const item = {
            hidden: { y: -2000 },
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
    <motion.section variants={item} initial="hidden" animate="show" transition={{duration: 1.25, delay: .25}} className="colors-2">
            <motion.div variants={container} initial="hidden" animate="show" className="details">
                <motion.div variants={item2}>
                    <Link className="return" to="/">← Return to home</Link>
                </motion.div>
                <motion.div variants={item2} className="details-title">Our Rooms</motion.div>
                <motion.figure variants={item2} className="couple-image">
                    <img src="aircon.jpeg" alt="Air-conditioned rooms."></img>
                    <figcaption className="couple-cap">Air-Conditioned Rooms. Comes in 2 pax, 3-4 pax, and 5-6 pax.</figcaption>
                </motion.figure>
                <motion.div className="room-details" variants={item2}>
                    <ul>2 pax AC room - 4,000</ul>
                    <ul>3-4 pax AC room - 5,000</ul>
                    <ul>5-6 pax AC room - 6,000</ul>
                </motion.div>
                <motion.figure variants={item2} className="couple-image">
                    <img src="cottage.jpg" alt="Rustic fan cottages."></img>
                    <figcaption className="couple-cap">Rustic Fan Rooms. Comes in 2 pax, 3-4 pax, 5-6 pax, 7-8 pax, 9-10 pax, 11-12 pax</figcaption>
                </motion.figure>
                <motion.div className="room-details" variants={item2}>
                    <ul>2 pax fanroom - 2,500</ul>
                    <ul>3-4 pax fanroom - 3,000</ul>
                    <ul>5-6 pax fanroom - 3,500</ul>
                    <ul>7-8 pax fanroom - 4,000</ul>
                    <ul>9-10 pax fanroom - 4,500</ul>
                    <ul>11-12 pax fanroom - 5,000</ul>
                </motion.div>
                <motion.figure variants={item2} className="couple-image">
                    <img src="deluxe.jpg" alt="Deluxe fan cottages."></img>
                    <figcaption className="couple-cap">Deluxe Fan Rooms. Comes in 13-16 pax, 17-20 pax.</figcaption>
                </motion.figure>
                <motion.div className="room-details" variants={item2}>
                    <ul>13-16 pax deluxe fanroom - 7,500</ul>
                    <ul>17-20 pax deluxe fanroom - 8,500</ul>
                </motion.div>
                <motion.p className="details-contact" variants={item2}>
                <p>We require a 50% downpayment in our BDO account to make reservations. Remaining balance in cash or check upon arrival.</p>  
                For availability, send us a message on&nbsp;
                <a className="details-link" href='https://www.facebook.com/VillaNoeBeach/' target="_blank">Facebook</a> or call us at 0995-586-2473 / 0921-784-9062.
                </motion.p>
            </motion.div>
        </motion.section>
  )
}

export default RoomsDetails