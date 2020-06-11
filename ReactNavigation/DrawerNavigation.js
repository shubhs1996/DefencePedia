import {createDrawerNavigator} from 'react-navigation-drawer'
import stackNavigator from './StackNavigation'


const DrawerNavigator=createDrawerNavigator({
  Home:stackNavigator,
//   About:About,
//   Suggestions:Suggestions,
})


export default DrawerNavigator