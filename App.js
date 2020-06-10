import React,{useState} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import Navigation from './ReactNavigation/MainNavigation'




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


  return <Navigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
