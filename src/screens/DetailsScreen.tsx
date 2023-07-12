import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { RouteStackParams } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RouteStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ( { route, navigation }: Props) => {

  const movie = route.params;

  const { isLoading, cast, fullMovie } = useMovieDetails( movie.id );

  return (
    <ScrollView >

      <View style = {{ backgroundColor: '#f2e9e1' }}>
        {
          isLoading 
            ?  <View style={{
              height:screenHeight,
              display: 'flex',
              flex: 1,
              justifyContent:'center',
              alignItems: 'center'
            }}>
                <ActivityIndicator size={ 30 } color='gray'/>
              </View>
            
            : <MovieDetails fullMovie={ fullMovie! } cast={ cast } route={route} navigation={navigation}/>
        }
      </View>
      
    </ScrollView>
  )
}