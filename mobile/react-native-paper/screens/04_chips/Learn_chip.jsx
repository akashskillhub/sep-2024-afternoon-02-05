import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Chip, Icon } from 'react-native-paper'

const Learn_chip = () => {
    return <>
        <View>
            <Text>Learn_chip</Text>

            <Chip>Ross</Chip>
            <Chip mode='outlined'>Rachel</Chip>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Chip closeIcon="close" onClose={e => { }}>Ross</Chip>
                <Chip icon="home" closeIcon="close" onClose={e => { }}>Ross</Chip>
                <Chip
                    avatar={<Avatar.Image size={24} source={{ uri: "https://images.unsplash.com/photo-1733503711060-1df31554390f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />}
                    closeIcon="close"
                    onClose={e => { }}>Ross</Chip>

            </View>
        </View>
    </>

}

export default Learn_chip

const styles = StyleSheet.create({})