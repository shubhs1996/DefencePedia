import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Options from '../component/Options'
import { ScrollView } from 'react-native-gesture-handler'
import { Color } from '../constant/color'


const Categories = (props) => {
    const id = props.navigation.getParam('force')

    const color = id === 'army' ? Color.army : id === 'navy' ? Color.navy : Color.airforce

    return <ScrollView>
    <View style={styles.imageContainer}>
      {id==='army'?<Image source={require('../assets/images/download.png')} style={styles.image}/>:
      id==='navy'?<Image source={require('../assets/images/IndianNavy.png')} style={styles.image}/>:
      <Image source={require('../assets/images/indianAir.png')} style={styles.image}/>}
    </View>
       
        <Options color={color} title='About' onSelect={() => props.navigation.navigate('About', { id: id })} />
        <Options color={color} title='Entries' onSelect={() => props.navigation.navigate('EntryList', { id: id })} />
        <Options color={color} title='Wars and Operations' onSelect={() => props.navigation.navigate('War_and_Operations',{id:id})} />
        <Options color={color} title='Rank Structure' onSelect={() => props.navigation.navigate('Rank',{id:id})} />
    </ScrollView>
}


const styles = StyleSheet.create({
    imageContainer:{
        width:350,
        height:400,
      borderWidth:1,
      borderRadius:300,
      marginHorizontal:'5%',
      overflow:'hidden',
    },
image:{
    width:'100%',
    height:'100%',

}
})


export default Categories;