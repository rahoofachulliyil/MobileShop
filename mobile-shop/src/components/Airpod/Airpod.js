import React from 'react'
import AirpodDetails from './AirpodDetails'
import Phonestoredata from '../Phonestoredata'

function Airpod() {
  return (
    <div className="work-container2">
    <h1 className="project-heading2">AirPods</h1>
    <div className="project-container2">
        {Phonestoredata.map((Phonestoretdat,ind) =>
        (<AirpodDetails key={ind}
             Phonestoretdata1={Phonestoretdat} />) )
    }
            </div> 
    
    </div>
  )
}

export default Airpod