import { StyleSheet, Text, View, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, FormControl, Stack, Button, Heading,WarningOutlineIcon } from 'native-base'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/login_background.jpg')

export default function Signup() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.img}>
          <Heading style={styles.heading} color={'#fff200'} size={'3xl'}>Sign Up</Heading>
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Full Name</FormControl.Label>
              <Input type="text" style={styles.input} />
              <FormControl.Label>Mobile Number</FormControl.Label>
              <Input type="text" style={styles.input} require />
              <FormControl.Label>Username</FormControl.Label>
              <Input type="text" style={styles.input} require />
              <FormControl.Label>Password</FormControl.Label>
              <Input type="text" style={styles.input} require />

              <Button size="md" variant="subtle" colorScheme="purple" style={styles.login_btn}>
                <Text style={styles.login_btn_label}>Sign Up</Text>
              </Button>
            </Stack>
          </FormControl>
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
  btn_Signup: {
    width: '30%',
    position: 'absolute',
    bottom: '2.5%',
    left: '55%'
  },
  btn_Signup_label: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 17
  },
  heading: {
    alignSelf: 'center',
    marginTop: '25%',
    marginBottom: '10%',
    textDecorationLine: 'underline'
  }
})