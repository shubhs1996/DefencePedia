import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, Button, Text, TextInput, Alert } from 'react-native'
import { RadioButton, ActivityIndicator } from 'react-native-paper'


import { addFeed } from '../store/Actions/DailyInfo'
import { addInfo } from '../store/Actions/Information'

const AddFeed = (props) => {

    const dispatch = useDispatch()


    //variables
    const [title, setTitle] = useState()
    const [link, setLink] = useState()
    const [content, setContent] = useState()
    const [checked, setChecked] = useState(props.type)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    


    //submitHandler
    const onSubmitHandler = async () => {

        if (!title || !link || !content) {
            return setError('Fill all the columns')
        }

        setLoading(true)
        if (checked === 'Info') {
            await dispatch(addInfo(title, link, content))
        } else {
            await dispatch(addFeed(title, link, content))

        }
        setLoading(false)
        Alert.alert(`Your ` + props.type + ' has been added')
        props.onPress();
    }



    if (loading) {
        return <View style={styles.modal}>
            <ActivityIndicator color={'black'} size={40} />
        </View>
    }

    //rendering part
    return <View style={styles.modal}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Information</Text><RadioButton
                value="Info"
                status={checked === 'Info' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Info')}
            />
            <Text>Feed</Text><RadioButton
                value="Feed"
                status={checked === 'Feed' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Feed')}
            />

        </View>
        <TextInput style={styles.textinput} value={title} placeholder='title' onChangeText={(value) => setTitle(value)} />
        <TextInput style={styles.textinput} value={link} placeholder='link' onChangeText={(value) => setLink(value)} />
        <TextInput style={styles.textArea} value={content} placeholder='write your content...' onChangeText={(value) => setContent(value)} numberOfLines={10} multiline={true} />
        <Text style={styles.err}>{error}</Text>
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

//styling
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    err: {
        fontSize: 18,
        color: 'red'
    }
})

export default AddFeed