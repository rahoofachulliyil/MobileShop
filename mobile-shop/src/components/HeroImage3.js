import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./HeroImageStyles3.css";

const slideProperties = {
  duration: 5000,
transitionDuration: 500,
infinite: true,
indicators: true ,
arrows: true,
// responsive: [
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 3,
//       infinite: true,
//       dots: true,
      
//     }
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 2,
//       initialSlide: 2
//     }
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }
//   }

};
const slideImages = [
  {
    url: 'https://tse1.mm.bing.net/th?id=OIP.kGmuLIMjc1TVVqyC43yAZgHaEK&pid=Api&P=0',
    caption: 'PHONE'
  },
  {
    url: 'https://tse3.mm.bing.net/th?id=OIP.XP68D2eGpP_iU3Pvz849kgHaD8&pid=Api&P=0',
    caption: 'AIRPOD'
  },
  {
    url: 'https://tse1.mm.bing.net/th?id=OIP.LprmKXEjuvk_ZcHjXxsoigHaFj&pid=Api&P=0',
    caption: 'MAC'
  },
];

const HeroImage3 = () => {
    return (
      <div className="slide-container">
        <Slide className="slide" {...slideProperties}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div  className='div' >
                <img  className='di' src={slideImage.url}/>
                <span className='sp'><h4>{slideImage.caption}</h4></span>
                
                </div>
      
            </div>
          ))} 
        </Slide>
      </div>
    )
}




export default HeroImage3