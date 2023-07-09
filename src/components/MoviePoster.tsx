import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/MovieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie,
    height?: number,
    width?: number,
}

export const MoviePoster = ( { movie, height= 420, width= 300 }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={ () => navigation.navigate('DetailsScreen', movie)}
        activeOpacity={ 0.7 }
        style= {{
            width,
            height,
            marginHorizontal: 2,
            paddingBottom: 20, 
            paddingHorizontal: 6
        }}
    >
        {/* <Text>{ movie.title }</Text> */}

        <View style= { styles.imageContainer }>
            <Image
                source = {{ uri }}
                style = { styles.movieImage }
            />
        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    movieImage:{
        flex: 1,
        borderRadius: 20,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
});
