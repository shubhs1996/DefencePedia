import React from 'react'
import {StyleSheet,View ,Text, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { OFFICERSRANKS, BELOWOFFICERSRANK } from '../dummy-data/data'
import RankModal from '../component/RankModal'

const Rank =(props)=>{
  
    const id= props.navigation.getParam('id')

    const availableData1=OFFICERSRANKS.filter(officer=>officer.id===id)
    const availableData2=BELOWOFFICERSRANK.filter(officer=>officer.id===id)

     return <RankModal id={id} availableData1={availableData1[0].name} availableData2={availableData2[0].name} image={availableData1[0].image}/>
    
}


Rank.navigationOptions=navData=>{

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
    


export default Rank