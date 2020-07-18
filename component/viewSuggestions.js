import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import moment from 'moment'

const viewSuggestion = (props) => {
    return <View style={styles.container}>
        <Text style={styles.suggestion}>{props.suggestion}</Text>
        <Text style={styles.info}>By {props.name}</Text>
        <Text style={styles.info}>{props.email}</Text>
        <Text style={styles.time}>Received {moment(props.createdAt).fromNow()}</Text>
    </View>

}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginHorizontal: '2.5%',
        borderWidth: 0.5,
        borderRadius: 5,
        marginVertical: '5%',
        padding: 10,
    },
   suggestion: {
        fontSize: 20,
        fontFamily: 'nunito'
    },
    info: {
        textAlign: 'left',
        fontFamily: 'nunito-bold',
        fontSize: 15,
        marginTop: 10,
        color:'gray'
    },
    time: {
        textAlign: 'justify',
        fontSize:15,
        fontFamily: 'nunito',
        color:'gray'
    }

})


export default viewSuggestion