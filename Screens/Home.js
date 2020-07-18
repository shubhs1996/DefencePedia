import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal,ActivityIndicator} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {useDispatch} from 'react-redux'


import { CATEGORIES } from '../dummy-data/data'
import CategoryGridTile from '../component/CategoryGridTitle'
import HeaderButton from '../component/HeaderButton'
import { Color } from '../constant/color'
import Suggestion from '../component/Suggestion'
import {LoadFeed} from '../store/Actions/DailyInfo'


const Home = (props) => {

  const dispatch =useDispatch()

  const { navigation } = props
  const [loading,setLoading]=useState(false)
 const [visible, setvisible] = useState(false)

//loading Feeds
useEffect(()=>{
   const loadFeeds= async ()=>{
    
    setLoading(true)
    
    await dispatch(LoadFeed())
    props.navigation.navigate('Feed')
    setLoading(false)
    
   };

   loadFeeds();
},[dispatch])

//changing visibility of Suggestion Modal
  const visibilityHandler = useCallback(async () => {
    setvisible(!visible)
  }, [visible])

  useEffect(() => {
    navigation.setParams({ visible: visibilityHandler })
  }, [visibilityHandler])
//end


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
              force: itemData.item.force,
              color: Color[itemData.item.force]
            }
          });
        }}
      />
    );
  };


  if(loading){
    return <View style={styles.screen}>
    <ActivityIndicator color='black' size={30}/>
    </View>
  }


  return <View>
  <FlatList
    keyExtractor={(item, index) => item.id}
    data={CATEGORIES}
    renderItem={renderGridItem}
  />
    <Modal visible={visible}>
      <Suggestion onPress={visibilityHandler} />
    </Modal>
  </View>

}


Home.navigationOptions = (navData) => {
  return {
    headerTitle: 'Indian Armed Force',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTitleStyle: {
      textAlign: 'center',
      fontFamily: 'nunito-bold',
      color: 'white'
    },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='contact'
          iconName="md-mail"
          onPress={navData.navigation.getParam('visible')}
        />
      </HeaderButtons>
    )
  };
}


const styles=StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})



export default Home;