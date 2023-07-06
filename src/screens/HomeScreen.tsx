import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActivityIndicator, View, FlatList, ScrollView} from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { Dimensions } from 'react-native';
import { Text } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

export default function HomeScreen() {

    const { isLoading, moviesPlaying } = useMovies();
    const { top } = useSafeAreaInsets()

    if ( isLoading ) {
        return (
            <View style = {{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color= 'red' size = { 100 } /> 
            </View>
        )
    }

    return (
       <ScrollView style={{ flex: 1}}>
            <View style = {{
                marginTop: top + 20,
                flex: 1
            }}>
                {/* Main Carousel */}
                <View style={{ height: 450}}>
                    <Carousel
                        data={ moviesPlaying }
                        renderItem={ ({ item }: any) => <MoviePoster movie={ item }/> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.8}
                    /> 
                </View>

                {/* Popular Movies */}
                <HorizontalSlider title="On teather" movies={moviesPlaying} />
            </View>
       </ScrollView>
    )
}
