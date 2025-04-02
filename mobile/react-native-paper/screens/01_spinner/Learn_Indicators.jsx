import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD3Colors } from 'react-native-paper'

const Learn_Indicators = () => {
    return (
        <View>
            <Text>Learn_Indicators</Text>

            <ActivityIndicator></ActivityIndicator>
            <ActivityIndicator size="large"></ActivityIndicator>
            <ActivityIndicator size={100}></ActivityIndicator>
            <ActivityIndicator size={100} color='red'></ActivityIndicator>

            <ActivityIndicator size={100} color={MD3Colors.error0}></ActivityIndicator>
        </View>
    )
}

export default Learn_Indicators

const styles = StyleSheet.create({})