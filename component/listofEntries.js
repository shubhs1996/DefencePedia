import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'


const EntryList = (props) => {
    return <TouchableOpacity onPress={props.onSelect}>
        <View style={{ ...styles.option, backgroundColor: props.color }}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    </TouchableOpacity>

}

        
const styles=StyleSheet.create({
    container:{
    flex:1,
},

option:{
    width: '90%',
height: 100,
marginHorizontal:'5%',
marginVertical:20,
borderWidth:0.1,
borderRadius:10,
overflow:'hidden'
},
title:{
    fontSize:30,
textAlign:'center',
marginTop:'8%'
}
})

export default EntryList;