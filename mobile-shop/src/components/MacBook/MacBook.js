import React from 'react'
import Phonestoretdata, { Phonestoredata } from "./Phonestoredata"
import Phonestore from "./Phonestore"
// import 'MacBook.scss'


const MacBook = () => {
  return (
    <div className="work-container1">
        <h1 className="project-heading1">MAC PRODUCTS</h1>
     
    

        {/* <div className= {()=>{for (let i = 1; i<  Phonestoredata.length + 1; i++){
      return i
   
  }}}>
    div1
  </div> */}
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

export default MacBook