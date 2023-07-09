import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailsScreen } from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { Movie } from '../interfaces/MovieInterface';

export type RouteStackParams = {
  HomeScreen: undefined,
  DetailsScreen: Movie,
}

const Stack = createStackNavigator<RouteStackParams>();

export const  StackNav = () => {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailsScreen" component={ DetailsScreen } />
    </Stack.Navigator>
  );
}