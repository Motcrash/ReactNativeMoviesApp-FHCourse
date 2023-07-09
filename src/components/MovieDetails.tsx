import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import currencyFormatter from 'currency-formatter'

import Icon from 'react-native-vector-icons/Ionicons'
import { FullMovie } from '../interfaces/MovieInterface';
import { Cast } from '../interfaces/creditrInterface';
import { CastItem } from './CastItem';

interface Props {
    fullMovie: FullMovie,
    cast: Cast[]
}

export const MovieDetails = ({ fullMovie, cast }: Props ) => {
    return (
        <>
            {/* Details */}
            <View style = {{ ...styles.globalMargin, flexDirection: 'row'}}>
                <Icon name="star-outline" color="gray" size={ 16 }/> 

                <Text>{ fullMovie.vote_average } </Text>

                <Text>
                    - { fullMovie.genres.map( g => g.name).join(', ') }
                </Text>

            </View>

            {/* Synopsis */}
            <Text style = {{ ...styles.globalMargin,fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Synopsis</Text>

            <Text style = {{ ...styles.globalMargin,fontSize: 16, marginTop: 5}}>{ fullMovie.overview }</Text>

            <Text style = {{ ...styles.globalMargin,fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Budget</Text>
            
            <Text style = {{ ...styles.globalMargin,fontSize: 18, marginTop: 5}}>{ currencyFormatter.format(fullMovie.budget, {code: 'USD'}) }</Text>

            {/* Cast */}
            <View style = {{ marginTop: 10, marginBottom: 100}}>
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
        </>
    )
}

const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 10
    }
});
