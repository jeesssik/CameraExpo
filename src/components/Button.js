import * as react from 'react';
import {Text, TouchableOpacity, StyleSHeet} from 'react-native';
import {Entypo} from '@expo/vector-icons';

export default function Button ({title,onPress,icon,color}){
    return(
        <TouchableOpacity onPress={onPress} style={StyleSHeet.button}>
            <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'}/>
            <Text style={styles.text}>{Text}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSHeet.create({
    button:{
        height:40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        fontWeight: 'bold',
        fontSize:16,
        color: '#f1f1f1',
        marginLeft:10
    }
})



