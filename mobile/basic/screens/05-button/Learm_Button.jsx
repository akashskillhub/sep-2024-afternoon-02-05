import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Learm_Button = () => {
    return (
        <View>
            <Text>Learm_Button</Text>
            <Button title='click me' color="red" onPress={() => console.log("pressed")} />
            <Button disabled title='click me' color="red" onPress={() => console.log("pressed")} />
        </View>
    )
}

export default Learm_Button

const styles = StyleSheet.create({})