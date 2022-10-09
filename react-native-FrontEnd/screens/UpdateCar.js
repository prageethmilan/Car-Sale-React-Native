import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, Text, FormControl, Stack, Input, Button,TextArea } from 'native-base'

export default function UpdateCar({ route, navigation }) {

    const[date,setDate] = useState(route.params.item.date);
    const[location,setLocation] = useState(route.params.item.location);
    const[description,setDescription] = useState(route.params.item.description);

    return (
        <NativeBaseProvider>
            <Text fontSize={'4xl'} style={styles.updateCarHeading}>Update Car</Text>
            <FormControl isRequired marginTop={"16"}>
                <Stack mx="4">
                    <FormControl.Label>Date</FormControl.Label>
                    <Input type="text" style={styles.input} value={date} />
                    <FormControl.Label>Location</FormControl.Label>
                    <Input type="text" style={styles.input} value={location} />
                    <FormControl.Label>Location</FormControl.Label>
                    <TextArea borderColor={'black'} w="80%" h="20" maxW="300" fontSize={15} value={description} />

                    <Button size="md" variant="subtle" colorScheme="purple" style={styles.signup_btn}>
                        <Text style={styles.signup_btn_label}>Update</Text>
                    </Button>
                </Stack>
            </FormControl>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    updateCarHeading: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontWeight: '800',
        alignSelf: 'center',
        marginTop: '5%'
    }
})