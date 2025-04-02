import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const Learn_input = () => {
    const [show, setShow] = useState(true)
    return <View>
        <Text>Learn_input</Text>
        <TextInput />
        <TextInput mode='outlined' label="Enter Your Name" />
        <TextInput
            secureTextEntry={show}
            right={<TextInput.Icon icon={show ? "eye" : "eye-off"} onPress={e => setShow(!show)} />}
            mode='outlined'
            label="Enter Your Password" />
    </View>

}

export default Learn_input

const styles = StyleSheet.create({})