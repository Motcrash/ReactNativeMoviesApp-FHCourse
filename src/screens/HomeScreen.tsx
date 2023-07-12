import React, { useContext, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActivityIndicator, View, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth, } = Dimensions.get('window')

export default function HomeScreen() {

    const { isLoading, topRated, upcoming, nowPlaying } = useMovies();
    const { top } = useSafeAreaInsets()
    const { setMainColors } = useContext( GradientContext )

    const getPosterColors = async ( index:number ) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

        const { primary = '#33605a', secondary = '#fbe4ae'} = await getImageColors( uri );

        setMainColors({ primary, secondary })
    }

    useEffect(() => {
      if(nowPlaying.length>0){
        getPosterColors(0);
      }
    }, [ nowPlaying])
    

    if ( isLoading ) {
        return (
            <View style = {{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color= 'red' size = { 100 } /> 
            </View>
        )
    }

    return (
       <GradientBackground>
            <ScrollView style={{ flex: 1}}>
                <View style = {{
                    marginTop: top + 20,
                    flex: 1
                }}>
                    {/* Main Carousel */}
                    <View style={{ height: 450}}>
                        <Carousel
                            data={ nowPlaying }
                            renderItem={ ({ item }: any) => <MoviePoster movie={ item }/> }
                            sliderWidth={ windowWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={0.8}
                            onSnapToItem={ index => getPosterColors( index )}
                        /> 
                    </View>

                    {/* Popular Movies */}
                    <HorizontalSlider title="Top rated" movies={ topRated } />
                    <HorizontalSlider title="Upcoming" movies={ upcoming } />
                </View>
            </ScrollView>
       </GradientBackground>
    )
}
