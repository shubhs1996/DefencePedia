import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DirecEntryDetail from '../component/DirectEntryDetail'
import QualifyingEntryDetail from '../component/QualifyingEntryDetail'
import { ENTRYDETAILS, ENTRIESLIST } from '../dummy-data/data'


const EntryDetail = (props) => {
   const entryId = props.navigation.getParam('entryId')
   const dataentry = ENTRIESLIST.filter((entryDetail) => entryDetail.id === entryId)
   const availableData = ENTRYDETAILS.filter((entryDetail) => entryDetail.id === entryId)

 if(availableData===[]){
      return <Text>No ENTRYDETAILS</Text>
   }
 

   //checking if Type of entry is Qualifying or Direct
if(dataentry[0].entryCategory==='QE'){
   return <QualifyingEntryDetail 
   title={availableData[0].name}
   detail={availableData[0].detail}
   limit={availableData[0].ageLimit}
   qualification={availableData[0].qualification}
   frequency={availableData[0].frequency}
   process={availableData[0].process}
   commission={availableData[0].commission}
   link={availableData[0].link }
   mode={availableData[0].mode}
   pattern={availableData[0].examPattern}
   language={availableData[0].language}
   duration={availableData[0].duration}
   syllabus={availableData[0].syllabus}
   
   />
}else {
    return <DirecEntryDetail
      title={availableData[0].name}
      detail={availableData[0].detail}
      limit={availableData[0].ageLimit}
      qualification={availableData[0].qualification}
      frequency={availableData[0].frequency}
      process={availableData[0].process}
      commission={availableData[0].commission}
      link={availableData[0].link }
   />

}
//end


  
}

//Header 
EntryDetail.navigationOptions=navData=>{

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
   

export default EntryDetail