import React, { useState } from 'react'
import { Box, HStack, NativeBaseProvider, Text, TextArea, FormControl, VStack, Input } from 'native-base'
import { StyleSheet, Dimensions, Image, PermissionsAndroid, Platform } from 'react-native'
import { IconButton, MD3Colors, Button } from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export default function SaveCarScreen({ route, navigation }) {

    const [photo, setPhoto] = useState("");
    const [username, setUsername] = useState(route.props.username);
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    // const openCamera = async () => {
    //     let options = {
    //         mediaType: 'photo',
    //         includeBase64: true,
    //         saveToPhotos: true
    //     }
    //     const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA
    //     );
    //     if (granted === PermissionsAndroid.PERMISSIONS.CAMERA) {
    //         const result = await launchCamera(options);
    //         console.log(result.assets[0].uri);
    //     }
    // }

    // const takePhotoFromCamera = () => {
    //     ImagePicker.openCamera({
    //         compressImageMaxWidth: 300,
    //         compressImageMaxHeight: 300,
    //         cropping: true,
    //         compressImageQuality: 0.7
    //     }).then(image => {
    //         setPhoto(image.path);
    //     });
    // }

    const takePhotoFromCamera = async () => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: true,
            presentationStyle: 'popover',
            quality: 1
        }
        launchCamera(options, (res) => {
            if (res.didCancel) {
                console.log('User Cancled');
            } else if (res.errorCode) {
                console.log(res.errorMessage);
            } else {
                const data = res.assets[0];
                console.log(data);
                setPhoto(data);
            }
        });
    }

    const takePhotoFromGallery = async () => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo'
        }
        const result = await launchImageLibrary(options);
        console.log(result.assets[0].uri);
        setPhoto(result.assets[0]);
    }


    const createFormData = (photo, body) => {
        const data = new FormData();

        data.append('photo',{
            name: photo.fileName,
            type: photo.type,
            uri:
                Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
        });

        Object.keys(body).forEach((key) => {
            data.append(key, body[key]);
        });

        console.log(data);

        return data;
    };

    uploadImage = async () => {
        fetch('http://192.168.1.100:8000/cars/save', {
            method: 'POST',
            body: createFormData(photo, {
                username: username,
                date: date,
                location: location,
                description: description
            }),
            headers:{
                'Accept': 'application/json',
                'Content-type': 'multipart/form-data',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // console.log('upload succes', response);
                alert('Upload success!');
            })
            .catch((error) => {
                console.log('upload error', error);
                alert('Upload failed!');
            });
    }



    return (
        <NativeBaseProvider>
            {/* <Box style={styles.container}> */}
            <Text fontSize={'4xl'} style={styles.saveCarHeading}>Add Car Details</Text>
            <HStack space={2} justifyContent={'center'}>
                <IconButton
                    icon="camera"
                    iconColor={MD3Colors.neutral10}
                    size={30}
                    mode={'contained'}
                    style={styles.captureBtn}
                    onPress={() => {
                        takePhotoFromCamera();
                    }}
                />
                <Button icon="upload" mode="contained-tonal" style={styles.uploadImage_btn} onPress={() => { takePhotoFromGallery(); console.log("Upload button Pressed"); }}>
                    <Text style={styles.upload_btn_label}>UPLOAD IMAGE</Text>
                </Button>
            </HStack>
            <Image style={styles.uploadImageContainer} source={{ uri: photo.uri }} />
            {/* <Text fontSize={'2xl'} style={styles.addDescription_title}>Add Description</Text>
                <TextArea alignSelf={'center'} borderColor={'black'} placeholder="Description" w="80%" h="48" maxW="300" /> */}

            <VStack space={4} alignItems="center" mt="5%">
                <Input type="text" style={styles.input} w="80%" placeholder='Date' borderColor={'black'} value={date} onChangeText={(e) => { setDate(e) }} />
                <Input type="text" style={styles.input} require w="80%" placeholder='Location' borderColor={'black'} value={location} onChangeText={(e) => { setLocation(e) }} />
                <TextArea borderColor={'black'} placeholder="Description" w="80%" h="20" maxW="300" fontSize={15} value={description} onChangeText={(e) => { setDescription(e) }} />
            </VStack>

            <HStack space={2} justifyContent={'center'} marginTop={'4%'}>
                <Button icon="car" mode="contained" buttonColor='green'onPress={()=>{uploadImage()}} >
                    Save
                </Button>
                <Button icon="delete-sweep" mode="contained" buttonColor='gray'>
                    Clear
                </Button>
            </HStack>
            {/* </Box> */}
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
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
        alignSelf: 'center',
        resizeMode: 'cover'

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
    },
    input: {
        fontSize: 20
    }
})