import { createStackNavigator } from 'react-navigation-stack'
import EntryCategory from '../Screens/WarsandOperations'
import Categories from '../Screens/Categories'
import Home from '../Screens/Home'
import EntryList from '../Screens/EntriesList'
import EntryDetail from '../Screens/EntryDetail'
import About from '../Screens/About'
import RankStructure from '../Screens/RankStructure'



const stackNavigator = createStackNavigator({
    Home: Home,
    Categories: Categories,
    War_and_Operations:EntryCategory,
    EntryList: EntryList,
    EntryDetail: EntryDetail,
    About:About,
    Rank:RankStructure,
})



export default stackNavigator;