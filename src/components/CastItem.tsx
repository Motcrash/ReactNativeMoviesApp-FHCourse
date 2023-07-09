import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Cast } from "../interfaces/creditrInterface"

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }` 

  return (
    <View style = { styles.container }>  
        {
            actor.profile_path &&
            <Image
                source={{ uri }}
                style= {{ width: 50, height: 50, borderRadius: 10 }}
            /> 
        }

        <View style= {{ flexWrap: 'wrap'}}>
            <Text style= {{ ...styles.actorInfo, fontSize: 18, fontWeight: 'bold'}}> 
                { actor.name }
            </Text>
            <Text style= {{ ...styles.actorInfo, fontSize: 16, opacity: 0.7 }}> 
                { actor.character }
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        ShadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginRight: 10,
        paddingRight: 10,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 2,
    }

});
