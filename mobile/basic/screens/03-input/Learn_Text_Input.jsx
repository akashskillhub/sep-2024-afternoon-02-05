import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Learn_Text_Input = () => {
    return <View>
        <Text>Learn_Text_Input</Text>
        <TextInput
            placeholder='Enter address'
            style={styles.formControl}
            onChangeText={val => console.warn(val)} />

        <TextInput
            keyboardType='default'
            secureTextEntry
            style={styles.formControl}
            onChangeText={val => console.warn(val)} />
        <TextInput
            multiline
            keyboardType='default'
            style={styles.formControl}
            onChangeText={val => console.warn(val)} />
    </View>

}

export default Learn_Text_Input

const styles = StyleSheet.create({
    formControl: {
        borderStyle: "solid",
        padding: 10,
        borderColor: "grey",
        borderWidth: 1
    }
})