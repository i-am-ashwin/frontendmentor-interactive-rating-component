import React from 'react'
import './styles.css'
import StarIcon from '../assets/images/icon-star.svg';
function Rating({ratingScale = [], rating = 0,setRating , onClickSubmit}) {
  return (
    <main className="card">
    <img className='icon' src={StarIcon} alt="heading-icon" />
   <h1 className="heading">How did we do?</h1>
    <p className='description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
   <div className="rating-group">
   {ratingScale.map((value) => 
    <button key={value} className={rating === value ? "rating-btn btn-selected" :"rating-btn"}
    onClick={() => setRating(value)}
    >{value}</button>)}
   </div>
  <button onClick={onClickSubmit} className='submit-btn'>Submit</button>
    </main>
  )
}

export default Rating