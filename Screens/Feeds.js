import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { RefreshControl } from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import {LoadFeed} from '../store/Actions/DailyInfo'
import ViewFeeds from '../component/ViewFeed'
import HeaderButton from '../component/HeaderButton'


const Feeds=(props)=>{
  const {navigation}=props
  const dispatch=useDispatch()
  const [isrefreshing,setRefreshing]=useState(false)
    const availableFeeds =useSelector(state=>state.dailyInfo.dailyInfo)


//loading data when pull to refresh or screen come in focus again
    const loadFeed=useCallback(async()=>{
      setRefreshing(true)
      await dispatch(LoadFeed())
      setRefreshing(false)
    },[dispatch,navigation])

//loading data when screen comes in focus again
    useEffect(() => {
      const willFocusSub = navigation.addListener(
          'willFocus',
          loadFeed
          );
  
      return () => {
          willFocusSub.remove();
      };
  }, [navigation,loadFeed]);
  
//rendering each feed
const renderItem=(itemData)=>{
  return (<ViewFeeds
        title={itemData.item.title}
        link={itemData.item.link}
        content={itemData.item.content}
        createdAt={itemData.item.createdAt}
    />)

}



    return <ScrollView
    refreshControl={ 
      <RefreshControl 
      refreshing={isrefreshing} 
      onRefresh={loadFeed} 
      /> 
      } >
    
    <FlatList
    keyExtractor={(item,index)=>item.key}
    data={availableFeeds}
    renderItem={renderItem}
  />
  </ScrollView>
}


Feeds.navigationOptions=(navData)=>{
 

  return{
    headerTitle:'Daily Affairs',
     headerStyle:{
       backgroundColor:'#f4511e'
     },
     headerTintColor: '#fff',
     headerTitleStyle:{
       textAlign:'center',
       fontFamily:'nunito-bold',
       color:'white',
  marginRight:'20%'
     },
     headerLeft:()=>(
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
  }
}


export default Feeds