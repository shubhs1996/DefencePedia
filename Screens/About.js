import React from 'react'
import {ABOUTFORCES} from '../dummy-data/data'
import About from '../component/About'

const AboutForce =(props)=>{
    //getting id from route
    const id =props.navigation.getParam('id');

    //filtering of data
    const availableData=ABOUTFORCES.filter(about=>about.id===id)
//passsing props to About Component
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


//header Bar 
AboutForce.navigationOptions=navData=>{

    const color =navData.navigation.getParam('color')
    
        return {
            headerStyle:{
                backgroundColor:color
            },
            headerTintColor: '#fff',
            hederTitleStyle:{
                fontSize:25,
                fontFamily:'nunito-bold',
                textAlign:'center'
            }
        }
    }
    

export default AboutForce;