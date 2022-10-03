import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Signup from './screens/Signup'
import SaveCarScreen from './screens/SaveCarScreen'
import LoadCars from './screens/LoadCars'

export default function App() {
  return (
    <View>
      {/* <Login/> */}
      <Signup/>
      {/* <SaveCarScreen/> */}
      {/* <LoadCars/> */}
    </View>
  )
}