import React from 'react'
import { FlatList, View, Text,StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { filterEntry } from '../store/Actions/Entries'
import EntryList from '../component/listofEntries'
import { Color } from '../constant/color'
import { TouchableOpacity } from 'react-native-gesture-handler'


const EntryLists = (props) => {


  const dispatch = useDispatch();

  const onPressHandler=(value)=>{
    dispatch(filterEntry(value))
  }

  const data = useSelector(state => state.EntryLists.FilteredEntry)
  const force = props.navigation.getParam('id');
  const color = force === 'army' ? Color.army : force === 'navy' ? Color.navy : Color.airforce
  let availableData = data.filter((entry) => entry.category.includes(force))



  const renderList = itemData => {
    return (
      <EntryList
        title={itemData.item.title}
        entryCategory={itemData.item.entryCategory}
        color={color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'EntryDetail',
            params: {
              entryId: itemData.item.id,
              entryCategory: itemData.item.entryCategory,
              color:color
            }
          });
        }}
      />
    );
  };


  return <View>
  <View  style={styles.filter}>
  <TouchableOpacity onPress={()=>onPressHandler('ALL')}>
  <Text style={styles.filterOption}>ALL</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>onPressHandler('DE')}>
  <Text style={styles.filterOption}>DIRECT</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>onPressHandler('QE')}>
  <Text style={styles.filterOption}>QUALIFYING</Text>
  </TouchableOpacity>
  </View>

    <FlatList
      keyExtractor={(item, index) => item.id}
      data={availableData}
      renderItem={renderList}
    />
  </View>
}

EntryLists.navigationOptions = navData => {

  const color = navData.navigation.getParam('color')
  
  return {
    headerStyle: {
      backgroundColor: color
    },
    headerTintColor: '#fff',
    hederTitleStyle: {
      fontSize: 25,
      fontFamily: 'nunito-bold',
      textAlign: 'center'
    },
  }
}


const styles=StyleSheet.create({
  filter:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:8,
    borderWidth:0.1
  },
  filterOption:{
    fontSize:20,
  }
})



export default EntryLists;