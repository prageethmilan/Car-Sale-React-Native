import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, FormControl, Stack, Button } from 'native-base'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/login_background.jpg')

export default function Login() {

    return (
        <NativeBaseProvider>
            <Box style={styles.container}>
                <ImageBackground source={image} resizeMode='cover' style={styles.img}>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Username</FormControl.Label>
                            <Input type="text" style={styles.input} require />
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" style={styles.input} require />
                            <Button size="md" variant="subtle" colorScheme="purple" style={styles.login_btn}>
                                <Text style={styles.login_btn_label}>Login</Text>
                            </Button>
                        </Stack>
                    </FormControl>
                    <Text style={styles.signup_label}>Don't have an account?</Text>
                    <Button size="md" variant="link" colorScheme={'secondary'} style={styles.btn_Signup}>
                        <Text style={styles.btn_Signup_label}>Sign Up</Text>
                    </Button>
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
    logo: {
        width: '60%',
        height: '20%',
        marginTop: '30%',
        alignSelf: 'center'
    },
    input: {
        color: 'white',
        fontSize: 20
    },
    login_btn: {
        marginTop: '4%'
    },
    login_btn_label: {
        color: 'purple',
        fontSize: 15,
        fontWeight: 'bold'
    },
    signup_label: {
        position: 'absolute',
        color: 'white',
        fontSize: 17,
        bottom: '4%',
        left: '15%'
    },
    btn_Signup:{
        width:'30%',
        position:'absolute',
        bottom:'2.5%',
        left:'55%'
    },
    btn_Signup_label:{
        color:'pink',
        fontWeight:'bold',
        fontSize:17
    }
})