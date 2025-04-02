import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Learn_ActivityIndicator = () => {
    return (
        <View>
            <Text>Learn_ActivityIndicator</Text>

            <ActivityIndicator></ActivityIndicator>
            <ActivityIndicator size="large"></ActivityIndicator>
            <ActivityIndicator size="large" color="red"></ActivityIndicator>
            <ActivityIndicator size={100} color="blue"></ActivityIndicator>
        </View>
    )
}

export default Learn_ActivityIndicator

const styles = StyleSheet.create({})