import React, { useState, useEffect, useCallback } from 'react'
import { FlatList, View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { filterEntry } from '../store/Actions/Entries'
import EntryList from '../component/listofEntries'
import { Color } from '../constant/color'
import { Switch } from 'react-native-gesture-handler'
import { HeaderButtons,Item} from 'react-navigation-header-buttons'

import HeaderButton from '../component/HeaderButton'

const EntryLists = (props) => {

  const { navigation } = props
  const [value, setValue] = useState(false)
  const [entryType,setType] =useState('ALL ENTRIES')

  const dispatch = useDispatch();
 
  const onswitchHandler = useCallback(() => {
    setValue(!value)
    const type =!value?'QUALIFYING ENTRIES':'DIRECT ENTRIES'
    setType(type)
    const entryCategory = value ? 'DE' : 'QE'
    dispatch(filterEntry(entryCategory))
  }, [value, dispatch])



  useEffect(() => {
    navigation.setParams({save: onswitchHandler, value: value,color:color });
  }, [onswitchHandler, value]);

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
    <Text style={{textAlign:'center',fontSize:25}}>{entryType}</Text>
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
    headerRight: () => <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Switch
        trackColor={{ false: 'white', true: color }}
        thumbColor='black'
        value={navData.navigation.getParam('value')}
        onValueChange={navData.navigation.getParam('save')}
      />
    </View>
  }
}



export default EntryLists;