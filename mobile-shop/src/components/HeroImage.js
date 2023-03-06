import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./HeroImageStyles3.css";

const HeroImage = ({slideImages}) => {
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div key={index}>
          <div  className='div' style={{  'backgroundImage': `url(${slideImage.img})` }}>
            <span className='sp'>{slideImage.img}</span>
          </div>
        </div>
      ))} 
    </Slide>
  </div>
  )
}

export default HeroImage