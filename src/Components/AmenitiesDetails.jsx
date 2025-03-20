import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AmenitiesDetails() {
  return (
    <motion.section variants={item} initial="hidden" animate="show" transition={{duration: 1, delay: .25}} className="colors-2">
            <motion.div variants={container} initial="hidden" animate="show" className="details">
                <motion.div variants={item2}>
                    <Link className="return" to="/">← Return to home</Link>
                </motion.div>
                <motion.div variants={item2} className="details-title">A History of Villa Noe Beach</motion.div>
                <motion.p variants={item2}>Villa Noe Beach was originally a private beach house, named in honor of the late Noe V. Taiño, a World War II veteran and father of the current owners. The land, located on Cagbalete Island, was passed down through generations, tracing back to Don Benedicto Pansacola, whose daughter, Doña Maria, married Don Silverio Taiño, a former El Presidente of Mauban. Among their seven children was Noe Taiño.</motion.p>
                <motion.p variants={item2}>Noe Taiño studied law at the University of Santo Tomas, served as a soldier during World War II, and later worked at the National Treasury of the Philippines. He married Cornelia Javaluyas, a teacher, and together they raised their family.</motion.p>
                <motion.p variants={item2}>In 1990, their eldest daughter, Lorie Taiño Carlos, built a beach house on the family land, serving as a private summer retreat for the Taiño clan and close friends. By 2012, the family began developing the property into a public beach resort, transforming it into the Villa Noe Beach known today—a peaceful getaway that welcomes visitors to experience the natural beauty of Cagbalete Island.</motion.p>
            </motion.div>
        </motion.section>
  )
}

export default AmenitiesDetails