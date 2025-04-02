import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from './screens/Home'
import Settings from './screens/Settings'
import History from './screens/History'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { Provider } from 'react-redux'
import reduxStore from './redux/store'
import { PaperProvider } from 'react-native-paper'
const App = () => {
  const Tab = createBottomTabNavigator()
  return <Provider store={reduxStore}>
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{ tabBarIcon: () => <AntDesign name="home" size={24} color="black" /> }}
            name='home' component={Home} />
          <Tab.Screen
            options={{ tabBarIcon: () => <FontAwesome name="history" size={24} color="black" /> }}
            name='history' component={History} />
          <Tab.Screen
            options={{ tabBarIcon: () => <Entypo name="cog" size={24} color="black" /> }}
            name='setting' component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </Provider>
}

export default App

const styles = StyleSheet.create({})
