import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { RouteStackParams } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RouteStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ( { route, navigation }: Props) => {

  

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const { isLoading, cast, fullMovie } = useMovieDetails( movie.id );

  return (
    <ScrollView>
      <View style = { styles.imageContainer }>
        <View style = { styles. imageBorder }>
          <Image
            source={{ uri }}
            style = { styles.posterImage }
          />
        </View>
      </View>

      <View style = { styles.marginContainer }>
        <Text style={ styles.subtitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>

      

      <View>
        {
          isLoading 
            ?  <ActivityIndicator size={ 30 } color='gray' style= {{ marginTop: 10}} />
            : <MovieDetails fullMovie={ fullMovie! } cast={ cast }/>
        }
      </View>

      <View style= {styles.backButtonContainer }>
          <TouchableOpacity
            onPress={() => navigation.pop() }
          >
            <Icon
              color='white'
              name='arrow-back-outline'
              size={ 60 }
              style={{opacity: 1}}
            />
          </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      height: screenHeight * 0.7,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
    },
    imageBorder: {
      flex:1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
    marginContainer:{
      marginHorizontal: 20,
      marginTop: 20
    },
    subtitle: {
      fontSize: 16,
      opacity: 0.7
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    backButtonContainer: {
      position: 'absolute',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});