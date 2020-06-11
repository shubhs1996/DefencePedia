import React, { useState } from 'react'
import {StyleSheet,Text,View,FlatList} from 'react-native'
import {OPERATIONS} from '../dummy-data/data'
import OperationList from '../component/OperationList'

const WarAndOperations =(props)=>{
  
    const id= props.navigation.getParam('id')

    const availableData =OPERATIONS.filter(operation=>operation.id===id)
    
  

  
    const renderList = itemData => {
        return (
          <OperationList 
            title={itemData.item.title}
            place={itemData.item.place}
            content={itemData.item.content}
          />
        );
      };


    return <FlatList
        keyExtractor={(item, index) =>index.toString()}
        data={availableData}
        renderItem={renderList}
    />
}


WarAndOperations.navigationOptions=navData=>{

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
  


export default WarAndOperations;