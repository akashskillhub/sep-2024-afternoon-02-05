import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Modal, Portal } from 'react-native-paper'

const Learn_modal = () => {
    const [show, setShow] = useState(false)
    return <>
        <View>
            <Text>Learn_modal</Text>
            <Button onPress={e => setShow(true)} mode='contained'>Press</Button>
            <Portal>
                <Modal contentContainerStyle={styles.modal} visible={show} onDismiss={e => setShow(false)}>
                    <View>
                        <Text>Hello Modal</Text>
                    </View>
                </Modal>
            </Portal>

        </View>
    </>

}

export default Learn_modal

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "white",
        color: "black",
        justifyContentL: "center",
        alignItems: "center",
        minHeight: 300,
        margin: 30,
        borderRadius: 10
    }
})