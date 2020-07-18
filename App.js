import React, { useState } from 'react';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigation from './ReactNavigation/MainNavigation'
import ReduxThunk from 'redux-thunk'

import Auth from './store/Reducers/auth'
import DailyInfoReducer from './store/Reducers/DailyInfo'
import NotificationReducer from './store/Reducers/Information'
import EntriesReducer from './store/Reducers/Entries'
import Suggestion from  './store/Reducers/suggestion'

const rootReducer = combineReducers({
  Information:NotificationReducer,
  dailyInfo: DailyInfoReducer,
  EntryLists:EntriesReducer,
  Auth:Auth,
  Suggestion:Suggestion
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));


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
  console.disableYellowBox = true;

  return <Provider  store ={store}>
  <Navigation/> 
  </Provider>
}

