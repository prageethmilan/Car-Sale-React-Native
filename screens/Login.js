import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/login_background.jpg')

export default function Login() {

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode='cover' style={styles.img}>
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    img:{
        width:'100%',
        height:'100%'
    }
})