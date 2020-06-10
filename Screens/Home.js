import React from 'react'
import {StyleSheet,Text,View, TouchableOpacity, FlatList, Image} from 'react-native'
import {CATEGORIES} from '../dummy-data/data'
import CategoryGridTile from '../component/CategoryGridTitle'

const Home =(props)=>{

    const renderGridItem = itemData => {
        return (
          <CategoryGridTile
            title={itemData.item.title}
           image={itemData.item.image}
            onSelect={() => {
              props.navigation.navigate({
                routeName: 'Categories',
                params: {
                  categoryId: itemData.item.id,
                  force:itemData.item.force
                }
              });
            }}
          />
        );
      };


    return <FlatList  
        keyExtractor={(item,index)=>item.id} 
        data={CATEGORIES} 
        renderItem= {renderGridItem}
        />
        
}




export default Home;