import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import currencyFormatter from 'currency-formatter'

import Icon from 'react-native-vector-icons/Ionicons'
import { FullMovie } from '../interfaces/MovieInterface';
import { Cast } from '../interfaces/creditrInterface';
import { CastItem } from './CastItem';
import { RouteStackParams } from '../navigation/Navigation';
import { RouteProp } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Dimensions.get('screen').height;

interface Props {
    fullMovie: FullMovie,
    cast: Cast[], 
    route: RouteProp<RouteStackParams, "DetailsScreen">,
    navigation: StackNavigationProp<RouteStackParams, "DetailsScreen", undefined>
}

export const MovieDetails = ({ fullMovie, cast, route, navigation }: Props ) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <>
            {/* Details */}
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

            <View style = {{ ...styles.globalMargin, flexDirection: 'row'}}>
                <Icon name="star-outline" color="gray" size={ 16 }/> 

                <Text> { fullMovie.vote_average } </Text>

                <Text>
                    - { fullMovie.genres.map( g => g.name).join(', ') }
                </Text>

            </View>

            {/* Synopsis */}
            <Text style = {{ ...styles.globalMargin,fontSize: 23, marginTop: 15, fontWeight: 'bold'}}>Synopsis</Text>

            <Text style = {{ ...styles.globalMargin,fontSize: 16, marginTop: 5}}>{ fullMovie.overview }</Text>

            <Text style = {{ ...styles.globalMargin,fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Budget</Text>
            
            <Text style = {{ ...styles.globalMargin,fontSize: 18, marginTop: 5}}>{ currencyFormatter.format(fullMovie.budget, {code: 'USD'}) }</Text>

            {/* Cast */}
            <View style = {{ marginTop: 10, marginBottom: 30}}>
                <Text style = {{ ...styles.globalMargin, fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Actors</Text>
                <FlatList
                    data={ cast }
                    keyExtractor={( item ) => item.id.toString() }
                    renderItem={({ item }) => <CastItem actor={ item } /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10}}
                /> 
            </View>

            <LinearGradient
                colors={[ 'black', 'transparent']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0, y: 0}}
                end={{x: 0.1, y: 0.2}}
            />
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
        </>
    )
}

const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 15
    },
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
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 15,
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
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});
