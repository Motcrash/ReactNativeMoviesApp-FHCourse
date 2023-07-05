import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {

    const { navigate } = useNavigation();

  return (
    <View>
        <Text>DetailScreen</Text>
    </View>
  )
}
