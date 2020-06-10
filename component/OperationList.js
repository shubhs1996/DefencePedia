import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const WarAndOperation = (props) => {
    const [display,setDisplay]=useState('none')


    const onPressHandler=()=>{
        if(display==='none'){
          setDisplay('flex')
        }else{
          setDisplay('none')
        }
      }
           

    return <View style={styles.container}>
        <TouchableOpacity onPress={onPressHandler}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
        <View style={{ display:display }}>
            <Text style={styles.place}>Place: {props.place}</Text>
            <Text style={styles.content}>{props.content}</Text>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.68,
        shadowRadius: 20,
        elevation: 2,
        borderWidth: 0.1,
        borderRadius: 5,
        marginVertical: '5%',
        padding: 10,
    },
    title: {
        textAlign: 'left',
        fontSize: 25,
        fontFamily: 'nunito-bold',
      //  textDecorationLine: 'underline',

    },
    place: {
        textAlign: 'left',
        fontFamily: 'nunito',
        fontSize: 20,
        marginVertical: 5,
    },
    content: {
        textAlign: 'justify',
        fontSize: 23,
        fontFamily: 'nunito'
    }

})


export default WarAndOperation