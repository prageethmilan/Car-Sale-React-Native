import { View, Text } from 'react-native'
import * as React from 'react'
import Login from './screens/Login'
import Signup from './screens/Signup'
import SaveCarScreen from './screens/SaveCarScreen'
import LoadCars from './screens/LoadCars'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigationScreen from './components/BottomNavigationScreen'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='Dash' component={BottomNavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}