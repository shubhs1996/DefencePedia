import React, { useState } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
import * as WebBrowser from 'expo-web-browser'




const ViewInfo = (props) => {



    const onPressHandler = async () => {
        await WebBrowser.openBrowserAsync(props.link);
    }

    return <View style={styles.container}>
        <TouchableOpacity onPress={onPressHandler}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
        <Text style={styles.content}>{props.content}</Text>
        <Text style={styles.time}>{moment(props.createdAt).fromNow()}</Text>

    </View>
}


const styles = StyleSheet.create({
    container: {
        width: '98%',
        marginHorizontal:'1%',
        marginTop:10,
        borderWidth:0.1,
        shadowColor: '#f4511e',
        shadowOffset: { widht: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 3,
        padding: 10,
        borderRadius:10
    },
    title: {
        fontSize: 23,


    },
    content: {
        fontSize: 18,
        fontFamily: 'nunito',
        color: 'gray'
    },
    time: {
        textAlign: 'justify',
        fontSize: 13,
        fontFamily: 'nunito',
        color: 'gray'
    }



})


export default ViewInfo