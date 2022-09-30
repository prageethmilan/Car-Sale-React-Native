import { View, Text, StyleSheet, Dimensions, ImageBackground,Image } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box } from 'native-base'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/login_background.jpg')

export default function Login() {

    const [show, setShow] = React.useState(false);

    return (
        <NativeBaseProvider>
            <Box style={styles.container}>
                <ImageBackground source={image} resizeMode='cover' style={styles.img}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
                </ImageBackground>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    img: {
        width: '100%',
        height: '100%'
    },
    logo:{
        width:'60%',
        height:'20%',
        marginTop:'30%',
        alignSelf:'center'
    }
})