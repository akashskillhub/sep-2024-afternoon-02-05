import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from './screens/Login'
import Register from './screens/Register'
import Landing from './screens/Landing'
const App = () => {
  const Stack = createNativeStackNavigator()
  return <Provider store={reduxStore}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='register' component={Register} />
          <Stack.Screen name='landing' component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </Provider>
}

export default App

const styles = StyleSheet.create({})