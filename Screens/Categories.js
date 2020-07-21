import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Options from '../component/Options'
import { ScrollView } from 'react-native-gesture-handler'
import { Color } from '../constant/color'


const Categories = (props) => {

    const id = props.navigation.getParam('force')

    const color = id === 'army' ? Color.army : id === 'navy' ? Color.navy : Color.airforce


    //Categories and Options of each forces
    return <ScrollView>
    <View style={styles.imageContainer}>
      {id==='army'?<Image source={require('../assets/images/download.png')} style={styles.image}/>:
      id==='navy'?<Image source={require('../assets/images/IndianNavy.png')} style={styles.image}/>:
      <Image source={require('../assets/images/indianAir.png')} style={styles.image}/>}
    </View>
       
    
        <Options color={color} title='About' onSelect={() => props.navigation.navigate('About', { id: id ,color:color})} />
        <Options color={color} title='Entries' onSelect={() => props.navigation.navigate('EntryList', { id: id,color:color })} />
        <Options color={color} title='Wars and Operations' onSelect={() => props.navigation.navigate('War_and_Operations',{id:id,color:color})} />
        <Options color={color} title='Rank Structure' onSelect={() => props.navigation.navigate('Rank',{id:id,color:color})} />
    </ScrollView>
}

//CSS 
const styles = StyleSheet.create({
    imageContainer:{
        width:'80%',
        height:400,
      borderWidth:0.1,
      borderRadius:200,
      marginHorizontal:'10%',
      overflow:'hidden',
    },
image:{
    width:'100%',
    height:'100%',

}
})

//headrbar
Categories.navigationOptions=navData=>{

const color =navData.navigation.getParam('color')

    return {
        headerStyle:{
            backgroundColor:color
        },
        headerTintColor: '#fff',
        hederTitleStyle:{
            fontSize:25,
            fontFamily:'nunito-bold',
            textAlign:'center'
        }
    }
}


export default Categories;