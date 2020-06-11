import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ENTRIESLIST } from '../dummy-data/data'
import EntryList from '../component/listofEntries'
import {Color} from '../constant/color'

const EntryLists = (props) => {
   
 const force=props.navigation.getParam('id');
 
 const color = force === 'army' ? Color.army :force === 'navy' ? Color.navy : Color.airforce
    const availableData =ENTRIESLIST.filter((entry)=>entry.category.includes(force))

    const renderList = itemData => {
        return (
          <EntryList 
            title={itemData.item.title}
            entryCategory={itemData.item.entryCategory}
            color={color}
            onSelect={() => {
              props.navigation.navigate({
                routeName: 'EntryDetail',
                params: {
                  entryId:itemData.item.id,
                 entryCategory:itemData.item.entryCategory,
                }
              });
            }}
          />
        );
      };


    return <FlatList
        keyExtractor={(item, index) => item.id}
        data={availableData}
        renderItem={renderList}
    />
}

EntryLists.navigationOptions=navData=>{

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
  


export default EntryLists;