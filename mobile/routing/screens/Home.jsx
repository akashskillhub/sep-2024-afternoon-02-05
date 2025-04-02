import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Landing from '../components/Landing'
import Profile from '../components/Profile'
import Setting from '../components/Setting'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
const Home = () => {
    const Tab = createBottomTabNavigator()
    return <>
        <Tab.Navigator>
            <Tab.Screen
                options={{ tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }}
                name='landing'
                component={Landing} />
            <Tab.Screen
                options={{ tabBarIcon: () => <AntDesign name="profile" size={24} color="black" /> }}
                name='profile' component={Profile} />
            <Tab.Screen
                options={{ tabBarIcon: () => <Entypo name="cog" size={24} color="black" /> }}
                name='setting' component={Setting} />
        </Tab.Navigator>
    </>
}

export default Home

const styles = StyleSheet.create({})