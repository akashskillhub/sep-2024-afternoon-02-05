import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MD3Colors, ProgressBar } from 'react-native-paper'

const Learn_progress = () => {
    return (
        <View>
            <Text>Learn_progress</Text>
            <ProgressBar indeterminate progress={0.5} color={MD3Colors.error50} />
        </View>
    )
}

export default Learn_progress

const styles = StyleSheet.create({})