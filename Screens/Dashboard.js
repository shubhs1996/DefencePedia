import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, AsyncStorage, StyleSheet, Modal,ActivityIndicator } from 'react-native'
import * as authActions from '../store/Actions/auth'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AddFeed from '../component/addFeed'
import { loadSuggestion } from '../store/Actions/suggestion'

const Admin = (props) => {
  const { navigation } = props
  const [isVisible, setisVisible] = useState(false)
  const [type, setType] = useState()
  const [error,setError]=useState(null)
  const [isLoading,setIsLoading]=useState(false)
  const dispatch = useDispatch()


  useEffect(() => {
    const tryLogin = async () => {
      setIsLoading(true)
      await dispatch(loadSuggestion())
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        props.navigation.navigate('Login');
        setIsLoading(false);
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId } = transformedData;

      if (!token || !userId) {
        props.navigation.navigate('Login');
        setIsLoading(false)
        return;
      }

      try {
        await dispatch(authActions.authenticate(userId, token));
        setIsLoading(false)

      } catch (err) {
        setError(err.message)
      }
    };

    tryLogin();

  },[dispatch])



  const logouthandler = useCallback(async () => {
    await dispatch(authActions.logout())
    props.navigation.navigate('Login')
  }, [dispatch])

  //setting the logouthandler as naviagtion Param
  useEffect(() => {
    navigation.setParams({ logout: logouthandler })
  }, [logouthandler])



  const addFeedModal = (value) => {
    setType(value)
    setisVisible(!isVisible)
  }


//SuggestionHandler

const onViewSugggestions=()=>{
  props.navigation.navigate('Suggestion',{error:error})
}


  
   if(isLoading){
     return <Modal visible={isLoading} >
     <View style={styles.loading}>
     <ActivityIndicator size={50} color={'gray'}/>
     </View>
     </Modal>
   }


  return <View style={styles.screen}>
    <Modal visible={isVisible}>
      <AddFeed onPress={addFeedModal} type={type} />
    </Modal>


    <TouchableOpacity onPress={() => addFeedModal('Feed')} >
      <View style={styles.box}>
        <Text style={styles.text}>Add Feed</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.text}>Delete Feeds</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => addFeedModal('Info')}>
      <View style={styles.box}>
        <Text style={styles.text}>Add Notification</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.text}>Delete Notifications</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={onViewSugggestions}>
      <View style={styles.box}>
        <Text style={styles.text}>View Suggestions</Text>
      </View>
    </TouchableOpacity>

  </View>
}


Admin.navigationOptions = (navData) => {
  const logoutHandler = navData.navigation.getParam('logout')

  return {
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTitleStyle: {
      fontFamily: 'nunito-bold',
      color: 'white'
    },
    headerRight: () => (<View style={{ marginHorizontal: 10 }}>
      <TouchableOpacity onPress={logoutHandler}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>)

  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-around',

    width: '100%'

  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  box: {
    marginTop: 20,
    width: '95%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: '2.5%'
  },
  text: {
    fontSize: 25
  }
});


export default Admin