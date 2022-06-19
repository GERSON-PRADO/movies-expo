import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <StatusBar higgen={true}/>
      <Routes />
    </NavigationContainer>
  )
}

export default App;