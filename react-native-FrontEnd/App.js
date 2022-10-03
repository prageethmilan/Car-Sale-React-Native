import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Signup from './screens/Signup'
import SaveCarScreen from './screens/SaveCarScreen'
import LoadCars from './screens/LoadCars'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    // <Signup />
    // <SaveCarScreen />
    // <LoadCars />
    </NavigationContainer>
  )
}