import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Snackbar } from 'react-native-paper'

const Learn_Snackbar = () => {
    const [show, setShow] = useState(false)
    return <View style={{ flex: 1 }}>
        <Text>Learn_Snackbar</Text>
        <Button
            onPress={e => setShow(!show)}
            mode='contained'>{show ? "Close" : "Open"}</Button>
        <Snackbar duration={2000} onDismiss={e => setShow(false)} visible={show}>user update success</Snackbar>
    </View>

}

// drawer
// list
// app bar
// dialog
// fab
export default Learn_Snackbar

const styles = StyleSheet.create({})