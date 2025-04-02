import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Learn_Modal = () => {
    const [show, setShow] = useState(false)
    return <View style={{ backgroundColor: "yellow", height: "100%" }}>
        <Text>Learn_Modal</Text>
        <Button onPress={() => setShow(true)} title="open modal" />

        <Modal visible={show} transparent={false} animationType='slide'>
            <View>
                <Text>hello modal</Text>
                <Button title='close' onPress={() => setShow(false)} />
            </View>
        </Modal>

    </View>

}

export default Learn_Modal

const styles = StyleSheet.create({})