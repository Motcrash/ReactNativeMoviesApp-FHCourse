import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
const App = () => {
  return (
    <NavigationContainer>
      <StackNav/> 

      {/* <FadeScreen/>  */}
    </NavigationContainer>
  )
}

export default App;
