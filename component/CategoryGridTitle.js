import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'


const CategoryGridItem = (props) => {

    return <TouchableOpacity  onPress={props.onSelect}>
    <View style={styles.container}>
    <Image source={{uri:props.image}} style={styles.image}/>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        </View>
        </TouchableOpacity>
    
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        width: '95%',
        height: 240,
        marginHorizontal:'2.5%',
        marginVertical:10,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:20,
        shadowOpacity:0.6,
        elevation:3,
        borderWidth:0.1,
        borderRadius:10,
        overflow:'hidden'

     },
    image: {
        width: '100%',
        height: '85%',
    },
    textContainer: {
        width: '100%',
        height:'100%',
        backgroundColor:'#ccc'

    },
    title: {
        fontSize: 25,
        color:'white',
        textAlign: 'center',
    }
})

export default CategoryGridItem;