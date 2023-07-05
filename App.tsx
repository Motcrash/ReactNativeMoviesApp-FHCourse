import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigation/Navigation';
export const App = () => {
  return (
    <NavigationContainer>
      <StackNav/> 
    </NavigationContainer>
  )
}
