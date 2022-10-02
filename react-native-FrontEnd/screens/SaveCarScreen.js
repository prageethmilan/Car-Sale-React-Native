import React from 'react'
import { Box, HStack, NativeBaseProvider, Text, TextArea } from 'native-base'
import { StyleSheet, Dimensions, Image } from 'react-native'
import { IconButton, MD3Colors, Button } from 'react-native-paper'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SaveCarScreen() {
    return (
        <NativeBaseProvider>
            <Box style={styles.container}>
                <Text fontSize={'4xl'} style={styles.saveCarHeading}>Add Car Details</Text>
                <HStack space={2} justifyContent={'center'}>
                    <IconButton
                        icon="camera"
                        iconColor={MD3Colors.neutral10}
                        size={30}
                        onPress={() => console.log('Pressed')}
                        mode={'contained'}
                        style={styles.captureBtn}
                    />
                    <Button icon="upload" mode="contained-tonal" style={styles.uploadImage_btn}>
                        <Text style={styles.upload_btn_label}>UPLOAD IMAGE</Text>
                    </Button>
                </HStack>
                <Image style={styles.uploadImageContainer} />
                <Text fontSize={'2xl'} style={styles.addDescription_title}>Add Description</Text>
                <TextArea alignSelf={'center'} borderColor={'black'} placeholder="Description" w="80%" h="48" maxW="300" />
                <HStack space={2} justifyContent={'center'} marginTop={'4%'}>
                    <Button icon="car" mode="contained" buttonColor='green'>
                        Save
                    </Button>
                    <Button icon="delete-sweep" mode="contained" buttonColor='gray'>
                        Clear
                    </Button>
                </HStack>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight
    },
    saveCarHeading: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontWeight: '800',
        alignSelf: 'center',
        marginTop: '5%'
    },
    upload_btn_label: {
        color: '#04044a',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 2,
        fontFamily: 'arial'
    },
    uploadImage_btn: {
        width: '60%',
        alignSelf: 'center',
        marginTop: '2.5%',
        borderColor: '#04044a',
        borderWidth: 1,
        borderRadius: 100
    },
    uploadImageContainer: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        height: '30%',
        marginTop: '2.5%',
        alignSelf: 'center'
    },
    captureBtn: {
        marginTop: '4%'
    },
    addDescription_title: {
        alignSelf: 'center',
        marginTop: '2.5%',
        fontWeight: '500',
        marginBottom: '2%',
        textDecorationLine: 'underline'
    }
})