import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ViewSuggestion from '../component/viewSuggestions'
import { RefreshControl } from 'react-native'
import { loadSuggestion } from '../store/Actions/suggestion'

const Suggestion = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const [refreshing, setRefreshing] = useState(false)
    const availableSuggestions = useSelector(state => state.Suggestion.Suggestions)





    const onRefresh = useCallback(async () => {
        try {
            setRefreshing(true)
            await dispatch(loadSuggestion())

            setRefreshing(false)
        } catch (error) {
            console.log(error.message)
        }
    }, [dispatch, navigation])

    useEffect(() => {
        const willFocusSub = navigation.addListener(
            'willFocus',
            onRefresh
        );

        return () => {
            willFocusSub.remove();
        };
    }, [navigation, onRefresh]);



    const renderItem = (itemData) => {
        return (<ViewSuggestion
            suggestion={itemData.item.suggestion}
            name={itemData.item.name}
            email={itemData.item.email}
            createdAt={itemData.item.createdAt}
        />);
    }

    return <ScrollView
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
    >
        <FlatList
            keyExtractor={(item, index) => item.key}
            data={availableSuggestions}
            renderItem={renderItem} />
    </ScrollView>

}




export default Suggestion