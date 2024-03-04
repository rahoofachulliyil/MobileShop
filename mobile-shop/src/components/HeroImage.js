import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./HeroImageStyles.css";

const HeroImage = ({slideImages}) => {
  const slideProperties = {
    duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true ,
  arrows: true
  };
  return (
    <div className="slide-container">
    <Slide className="slide" {...slideProperties}>
     {slideImages.map((slideImage, index)=> (
        <div key={index}>
          <div  className='div' style={{  'backgroundImage': `url(${slideImage.url})`,'width':'100%'}}>
            <span className='sp'>{slideImage.caption}</span>              </div>
  
        </div>
      ))} 
    </Slide>
  </div>
  )
}

export default HeroImage