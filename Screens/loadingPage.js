import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActivityIndicator, View, StyleSheet, AsyncStorage } from 'react-native'

import * as authActions from '../store/Actions/auth'


const LoadingPage = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {

        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                props.navigation.navigate('Login');
                return;
            }
            const transformedData = JSON.parse(userData);
            const { token, userId } = transformedData;


            if (!token || !userId) {
                props.navigation.navigate('Login');
                return;
            }

            await dispatch(authActions.authenticate(userId, token));
            props.navigation.navigate('Dashboard')
        };

        tryLogin();

    }, [dispatch])

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color='black' />
        </View>
    );

}

LoadingPage.navigationOptions=()=>{
    return{
        title:''
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default LoadingPage;