import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const Learn_Avatar = () => {
    return <>
        <View>
            <Text>Learn_Avatar</Text>
            <Avatar.Text label='AD' size={100} />
            <Avatar.Text label='AD' />

            <Avatar.Image source={require("./../../assets/icon.png")} />
            <Avatar.Image source={{ uri: "https://images.unsplash.com/photo-1733503711060-1df31554390f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />

            <Avatar.Icon icon="home" />
        </View>
    </>
}

export default Learn_Avatar

const styles = StyleSheet.create({})