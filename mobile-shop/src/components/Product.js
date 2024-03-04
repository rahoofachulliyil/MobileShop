import "./ProductStyle.css"
import Productdata from "./Productdata";
import ProductList from "./Productlist";

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">STORES</h1>
        <div className="project-container">{ Productdata.map((val,ind) =>{
            return( <ProductList
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            url={val.url}
            />)

            })
        }
            
        </div>
    </div>

  )
}

export default Work