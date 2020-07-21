import React,{useState, useEffect, useCallback} from 'react'
import { View, Text, Button, RefreshControl } from 'react-native'
import HeaderButton from '../component/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import { loadInfo } from '../store/Actions/Information'
import ViewInfo from '../component/ViewInfo'


const Notification = (props) => {
  const {navigation}=props
  const dispatch=useDispatch()
  const [refreshing, setRefreshing] = useState(false)
  const [err, setErr] = useState()
  const availableInfos = useSelector(state => state.Information.Informations)

  //loading data on refresh or onFocus
  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true)
      await dispatch(loadInfo())

      setRefreshing(false)

    } catch (error) {
      setErr(error.message)
    }
  },[dispatch,navigation])


  //loading when screen comes in focus
  useEffect(() => {
    const willFocusSub = navigation.addListener(
        'willFocus',
     onRefresh
        );

    return () => {
        willFocusSub.remove();
    };
}, [navigation,onRefresh]);

//rendering each notification
  const renderItem=(itemData)=>{
    return (<ViewInfo
          title={itemData.item.title}
          link={itemData.item.link}
          content={itemData.item.content}
          createdAt={itemData.item.createdAt}
      />)
  
  }

  if(err){
    return ( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>{err}</Text>
      <Button  title={'Try Again'} onPress={onRefresh}/>  
      </View>)
  }

  return <ScrollView
    refreshControl={
      <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
    }
  >
    <FlatList
      keyExtractor={(item, index) => item.key}
      data={availableInfos}
      renderItem={renderItem}
    />
  </ScrollView>
}


Notification.navigationOptions = (navData) => {

  return {
    headerTitle: 'Notifications',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTitleStyle: {
      textAlign: 'center',
      fontFamily: 'nunito-bold',
      color: 'white',
      marginRight:'20%'
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
  }
}

export default Notification