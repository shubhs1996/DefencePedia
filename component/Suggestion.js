import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, TextInput, Button, Text, Alert ,ActivityIndicator} from 'react-native';

import { addSuggestion } from '../store/Actions/suggestion'


const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const Suggestion = (props) => {
    const dispatch = useDispatch()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [suggestion, setSuggestion] = useState()
    const [loading,setloading]=useState(false)
    const [errors,setErrors]=useState({
       err:null,
       validEmail:null
        
    })




 //submission
    const onSubmitHandler = async () => {

        if(!name||!email||!suggestion){
        let validEmail=null;
        if(email){
             validEmail=validEmailRegex.test(email)?null:'Enter a valid email'
        }
       return setErrors({
           ...errors,
           validEmail:validEmail,
           err:'Please fill all the columns'
       })
        }


        if(!validEmailRegex.test(email)){
            return setErrors({
                ...errors,
                err:null,
                validEmail:'Enter a valid email'
            })
        }
         

        setloading(true)
        await dispatch(addSuggestion(name, email, suggestion))
        setloading(false)
        Alert.alert('Thanku for your suggestion')
        props.onPress();
    }


    if(loading){
        return (<View  style={styles.screen}>
            <ActivityIndicator color={'black'} size={40}/>
            </View>)
    }


    return <View style={styles.screen}>
        <Text style={styles.text}>Your suggestions are valuable!</Text>
        <TextInput style={styles.textinput} value={name} placeholder='your name' onChangeText={(value) => setName(value)} />
        <TextInput style={styles.textinput} value={email} placeholder='your email' onChangeText={(value) => setEmail(value)} />
        <TextInput style={styles.textArea} value={suggestion} placeholder='write your suggestion here...' onChangeText={(value) => setSuggestion(value)} numberOfLines={10} multiline={true} />
        <Text style={styles.err}>{errors.err}</Text>
        <Text style={styles.err}>{errors.validEmail}</Text>
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
    },
    err:{
        color:'red',
        fontSize:15
    }
})

export default Suggestion;