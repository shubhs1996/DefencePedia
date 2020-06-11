import React from 'react'
import {StyleSheet,Text,View, TouchableOpacity, FlatList, Image} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {CATEGORIES} from '../dummy-data/data'
import CategoryGridTile from '../component/CategoryGridTitle'
import HeaderButton from '../component/HeaderButton'
import {Color} from '../constant/color'

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
                  force:itemData.item.force,
                  color:Color[itemData.item.force]
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


Home.navigationOptions=(navData)=>{
   return {
     headerTitle:'Indian Armed Force',
     headerStyle:{
       backgroundColor:'#f4511e'
     },
     headerTitleStyle:{
       textAlign:'center',
       fontFamily:'nunito-bold',
       color:'white'
     },
    headerLeft:()=> (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
   };
}




export default Home;