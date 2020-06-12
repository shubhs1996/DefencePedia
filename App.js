import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigation from './ReactNavigation/MainNavigation'

import DailyInfoReducer from './store/Reducers/DailyInfo'
import NotificationReducer from './store/Reducers/Notification'
import EntriesReducer from './store/Reducers/Entries'

const rootReducer = combineReducers({
  Notification:NotificationReducer,
  dailyInfo: DailyInfoReducer,
  EntryLists:EntriesReducer

});

const store = createStore(rootReducer);


const fetchFonts = () => {
  return Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito': require('./assets/fonts/Nunito-Regular.ttf')
  });
};


export default function App() {
 
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }


  return <Provider  store ={store}>
  <Navigation/> 
  </Provider>
}

