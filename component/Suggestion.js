import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';

import { addSuggestion } from '../store/Actions/suggestion'


const Suggestion = (props) => {
    const dispatch = useDispatch()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [suggestion, setSuggestion] = useState()


    const onSubmitHandler = async () => {
        await dispatch(addSuggestion(name, email, suggestion))
        Alert.alert('Thanku for your suggestion')
        props.onPress();
    }


    return <View style={styles.screen}>
        <Text style={styles.text}>Your suggestions are valuable!</Text>
        <TextInput style={styles.textinput} value={name} placeholder='your name' onChangeText={(value) => setName(value)} />
        <TextInput style={styles.textinput} value={email} placeholder='your email' onChangeText={(value) => setEmail(value)} />
        <TextInput style={styles.textArea} value={suggestion} placeholder='write your suggestion here...' onChangeText={(value) => setSuggestion(value)} numberOfLines={10} multiline={true} />
        <View style={styles.btngrp}>
            <View style={styles.btn}><Button
                title={'Cancel'}
                color='red'
                onPress={props.onPress}
            /></View>

            <View style={styles.btn}><Button
                title={'Submit'}
                onPress={onSubmitHandler}
            /></View>

        </View>
    </View>
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    },
    textinput: {
        borderWidth: 1,
        marginVertical: 10,
        width: '90%',
        padding: 10,
        fontSize: 20
    },
    textArea: {
        borderWidth: 1,
        width: '90%',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20
    },
    btngrp: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    btn: {
        width: '30%'
    }
})

export default Suggestion;