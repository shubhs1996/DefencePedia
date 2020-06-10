import React from 'react'
import {ABOUTFORCES} from '../dummy-data/data'
import About from '../component/About'

const AboutForce =(props)=>{
    const id =props.navigation.getParam('id');

    const availableData=ABOUTFORCES.filter(about=>about.id===id)

return <About 
      title={availableData[0].title}
      content={availableData[0].content}
      founded={availableData[0].founded}
      size={availableData[0].size}
      motto={availableData[0].motto}
      COAS={availableData[0].COAS}
      VCOAS={availableData[0].VCOAS}
      notable={availableData[0].NotableCommanders}    
      id={id}
      day={availableData[0].day}   
 />
}

export default AboutForce;