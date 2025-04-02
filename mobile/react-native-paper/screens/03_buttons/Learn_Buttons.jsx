import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Learn_Buttons = () => {
    return <>
        <View style={{ gap: 10 }}>
            <Text>Learn_Buttons</Text>
            <Button>Default</Button>

            <Button onPress={e => console.log("pressed")} mode='contained'>contained</Button>
            <Button mode='contained-tonal'>contained-tonal</Button>
            <Button mode='elevated'>elevated</Button>
            <Button mode='outlined'>outlined</Button>
            <Button mode='text'>text</Button>

            <Button mode='contained' icon="home">contained</Button>
            <Button mode='contained' icon="home" loading>contained</Button>
            <Button mode='contained' icon="home" loading disabled>contained</Button>
        </View>
    </>

}

export default Learn_Buttons

const styles = StyleSheet.create({})