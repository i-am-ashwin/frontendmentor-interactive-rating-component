import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Rating from './components/rating';
import Thankyou from './components/Thankyou';

function App() {
  const [currentStep, setCurrentStep] = useState('initial'); // submitted
  const [rating, setRating] = useState(0);
  const onClickSubmit = () => {
    if (rating === 0) {
      return alert('Please Select a rating to continue');
    }
    setCurrentStep('submitted');
  };
  // create an array with scale and fill it with the rating values
  const ratingScale = new Array(5).fill(true).map((_, i) => i + 1);
  return (
    <div className="container">
      <AnimatePresence>
        {currentStep === 'initial' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Rating ratingScale={ratingScale} rating={rating} setRating={setRating} onClickSubmit={onClickSubmit} />{' '}
          </motion.div>
        )}
        {currentStep === 'submitted' && <Thankyou rating={rating} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
