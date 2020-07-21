import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useDispatch } from 'react-redux'

import { login } from '../store/Actions/auth'
import { View, TextInput, Button, StyleSheet, Text, BackHandler } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Login = (props) => {
    const [error, setErr] = useState(null)
    const [hide,setVisible]=useState(true)
    const [pass, setPass] = useState()
    const dispatch = useDispatch();

//on clicking back button 
    useEffect(() => {
        const backAction = () => {
            setErr(null)
            props.navigation.navigate('Home')
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

   

//on cancel
    const onCancelHandler = () => {
        props.navigation.navigate('Home')
    }

//onSubmit
    const onsubmitHandler = async () => {
        try {

            await dispatch(login('shsingh2096@gmail.com', pass))

            props.navigation.navigate('Admin')

        } catch (err) {
            setPass('')
            setErr(err.message)

        }
    }


    return <View style={styles.container}>
        <LinearGradient
            colors={['orange', 'white', 'green']}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%',
            }}

        />
        <View style={styles.icon}>
            <Ionicons name="md-person" size={100} color="#eee" />
            <Text style={styles.text}>Welcome Back!</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TextInput
            value={pass}
            onChangeText={(value) => setPass(value)}
            placeholder={'Password'}
            secureTextEntry={hide}
            style={{ ...styles.input, borderBottomWidth: 1 }}
        />
        <TouchableOpacity onPress={()=>setVisible(!hide)}>
        <Text style={{fontSize:15}}>{hide?'show':'hide'}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.btngrp}>
            <View style={styles.btn}><Button
                title={'Cancel'}
                color='red'
                onPress={onCancelHandler}
            /></View>

            <View style={styles.btn}><Button
                title={'Login'}
                color='green'
                onPress={onsubmitHandler}
            /></View>

        </View>
        <Text style={styles.error}>{error}</Text>
    </View>
}


Login.navigationOptions = () => {
    return {
        headerLeft: () => null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#abc'
    },
    icon: {
        marginTop: -120,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 30
    },
    input: {
        width: '60%',
        marginVertical: 10
    },
    btngrp: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 50
    },
    btn: {
        width: '30%'
    },
    error: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    }
})


export default Login