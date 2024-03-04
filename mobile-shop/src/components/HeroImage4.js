// import React from 'react'
// import { icons } from 'react-icons'
import './HeroImages4Styles.css'

const HeroImage4 = () => {
    const images=[{url1:"https://tse4.mm.bing.net/th?id=OIP.TmfRjn4iVhlFdtBOyDetZwHaEW&pid=Api&P=0",
        url2:"https://tse2.mm.bing.net/th?id=OIP.sO9TDT4nHbPbN5xcMDlg1QHaHa&pid=Api&P=0",
        url3:"https://tse1.mm.bing.net/th?id=OIP.Zpf7URfFkKLD5nd0QvY7GgHaE8&pid=Api&P=0",
}]
  return (
    
    <div className='grid'>
        <div className='g'>
    <div className='c1'>
        <div><h1>Iphone 14 pro</h1>
        <h3>hhjkcskjlkjkjcs sddjf
        </h3>
        <button >Buy Now </button>
        <img src={images[0].url1}/></div>
    </div>
    <div className='c2'><div><h1>Iphone 14</h1>
        <h5>hhjkcskjlkjkjcs sagdxfj
        </h5>
        <button>Buy Now</button>
            <img src={images[0].url2}/></div></div>
<div className='c3'><div><h1>MacBook</h1>
        <h5>hhjkcskjlkjkjcs
        </h5>
        <button>Buy Now</button>
            <img src={images[0].url3}/></div></div>
<div className='c4'><div><h1>AirPods</h1>
        <h5>hhjkcskjlkjkjcs
        </h5>
        <button>Buy Now</button>
            <img src={images[0].url1}/></div></div>
            <div className='c5'><div><h1>Watch</h1>
        <h5>hhjkcskjlkjkjcs
        </h5>
        <button>Buy Now</button>
            <img src={images[0].url1}/></div></div>
            <div className='c6'><div><h1>phone</h1>
        <h5>hhjkcskjlkjkjcs
        </h5>
        <button>Buy Now</button>
            <img src={images[0].url1}/></div></div>
            </div>

    </div>
  )
}

export default HeroImage4