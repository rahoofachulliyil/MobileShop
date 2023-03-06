import React from 'react'
import Phonestoretdata from "./Phonestoredata"
import Phonestore from "./Phonestore"
import './Phonestorestyles.css'


// const Phonestoretdata1=Phonestoretdata
const Phonestor = () => {

  return (
    <div className="work-container1">
        <h1 className="project-heading1">PRODUCTS</h1>
        <div className="project-container1">
            {Phonestoretdata.map((Phonestoretdat,ind) =>
            (<Phonestore key={ind}
                 Phonestoretdata1={Phonestoretdat} />) )
        }
            {/* // CartItems={CartItems} handleAddProduct={handleAddProduct}

            // key={ind}
            // imgsrc={val.img}
            // title={val.title}
            // text={val.info}
            // company={val.company} */}


            

         
            
        </div> 
        
    </div>
  )
}

 export default Phonestor