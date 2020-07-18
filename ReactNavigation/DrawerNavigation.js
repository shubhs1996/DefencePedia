import {createDrawerNavigator} from 'react-navigation-drawer'
import {HomestackNavigator, DailyAffairs} from './StackNavigation'
import {NotificationStackNavigator,AdminStackNavigator} from './StackNavigation'

const DrawerNavigator=createDrawerNavigator({
  Home:HomestackNavigator,
  Notification:NotificationStackNavigator,
  Feeds:DailyAffairs,
  Admin:AdminStackNavigator,
//   About:About,
//   Suggestions:Suggestions,
},
{
  contentOptions: {
    activeTintColor: '#f4511e',
  }
})


export default DrawerNavigator