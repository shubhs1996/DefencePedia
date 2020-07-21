import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack'
import EntryCategory from '../Screens/WarsandOperations'
import Categories from '../Screens/Categories'
import Login from '../Screens/Login'
import Home from '../Screens/Home'
import EntryList from '../Screens/EntriesList'
import EntryDetail from '../Screens/EntryDetail'
import About from '../Screens/About'
import RankStructure from '../Screens/RankStructure'
import Notification from '../Screens/NotificationList'
import Feeds from '../Screens/Feeds'
import Dashboard from '../Screens/Dashboard'
import LoadingPage from '../Screens/loadingPage'
import Suggestion from '../Screens/Suggestions'
import AboutApp from '../Screens/AboutApp';



export const HomestackNavigator = createStackNavigator({
    Home: Home,
    Categories: Categories,
    War_and_Operations:EntryCategory,
    EntryList: EntryList,
    EntryDetail: EntryDetail,
    About:About,
    Rank:RankStructure,
},{
    navigationOptions:{
        drawerIcon: drawerConfig => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
              size={23}
              color={drawerConfig.tintColor}
            />
          )
    }
})


export const NotificationStackNavigator =createStackNavigator({
  NotificationLists:Notification,
},{
  navigationOptions:{
      drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-notifications' : 'ios-notifications'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
  }
})


export const AdminStackNavigator=createStackNavigator({
  // Admin:LoadingPage,
  Admin:Dashboard,
  Login:Login,
  Suggestion:Suggestion
},{
  navigationOptions:{
    drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
}

})

export const DailyAffairs=createStackNavigator({
  Feed:Feeds
},{
  navigationOptions:{
    drawerIcon: drawerConfig => (
      <FontAwesome name="newspaper-o" size={24} color="black" />
      )
}
})

export const InfoAboutApp= createStackNavigator({
  AboutApp: AboutApp
},{
  navigationOptions:{
    drawerIcon: drawerConfig => (
      <FontAwesome name="info" size={24} color="black" />
      )
}
})


