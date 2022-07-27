import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState('initial'); // submitted
  const [rating, setRating] = useState('');
  // <!-- Rating state start -->
  // How did we do?
  // Please let us know how we did with your support request. All feedback is appreciated 
  // to help us improve our offering!

  // 1 2 3 4 5

  // Submit

  // <!-- Rating state end -->

  // <!-- Thank you state start -->

  // You selected <!-- Add rating here --> out of 5

  // Thank you!

  // We appreciate you taking the time to give a rating. If you ever need more support, 
  // don’t hesitate to get in touch!

  // <!-- Thank you state end -->

  return (
<div className="container">
</div>
  )
}

export default App
