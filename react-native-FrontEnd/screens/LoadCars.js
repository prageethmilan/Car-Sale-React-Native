import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React, { useState } from 'react'

export default function LoadCars() {
    const[DATA,setDATA]=useState(['Kamal']);
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ }) =>
                    <TouchableOpacity style={{borderWidth:1,marginBottom:'5%',padding:5}}>
                        <Text style={{marginBottom:10,fontWeight:'bold'}}>Hello</Text>
                        <Text style={{marginBottom:10}}>Body</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})