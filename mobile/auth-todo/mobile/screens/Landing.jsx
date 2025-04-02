import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from './Home'
import Todo from './Todo'
import Profile from './Profile'
const Landing = () => {
    const Tab = createBottomTabNavigator()
    return <>
        <Tab.Navigator>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='todo' component={Todo} />
            <Tab.Screen name='profile' component={Profile} />
        </Tab.Navigator>
    </>
}

export default Landing

const styles = StyleSheet.create({})