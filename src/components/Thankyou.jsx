import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import image from '../assets/images/illustration-thank-you.svg';
function Thankyou({ rating = 0 }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
      <main className="card align-center">
        <img src={image} alt="thankyou-image" />
        <p className="thankyou-rating">You selected {rating} out of 5</p>
        <h1 className="thankyou-heading">Thank you!</h1>
        <p className="thankyou-description">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
      </main>
    </motion.div>
  );
}

export default Thankyou;
