import React from 'react';
import { Link } from 'react-scroll';

const Offer = () => {
  return (
    <div id='presentaion'>
       <div className='pr-heading'>
                <h1>A BIG<span>OFFER </span> FOR THIS SUMMER</h1>
                <p className='details'>Bulid Your Body And Fitness With Professional Touch</p>
                <div className='pr-btns'>
                    <Link href="#" className='pr-btn'>JOIN US</Link>
                </div>
            </div>
    </div>
  )
}

export default Offer
