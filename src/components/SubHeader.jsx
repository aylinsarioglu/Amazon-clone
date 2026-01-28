import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const SubHeader = () => {
  return (
    <LinearGradient
    style={styles.container}
    colors={['#88dae0', '#bdeee9', '#c3f1e1']}
    start={{ x: 0.0, y: 0.25 }}
    end={{ x: 0.5, y: 1.0 }}
    >

        <Feather name="map-pin" size={16} color="black" />
        <Text style={styles.deliver}> Delivery to Turkey - 232425 </Text>
        <SimpleLineIcons name="arrow-down" size={10} color="black" />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
    container: {
        padding:13,
        flexDirection:'row',
        alignItems:'center',
    },
    deliver:{
        fontSize:13,
        color:'#2c4341',
        paddingHorizontal:6
    },
})