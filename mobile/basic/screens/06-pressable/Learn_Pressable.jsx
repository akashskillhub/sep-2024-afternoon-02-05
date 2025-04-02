import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Learn_Pressable = () => {
    return (
        <View >
            <Text >Learn_Pressable</Text>
            <Pressable
                onLongPress={() => console.log("long pressed")}
                onPress={() => console.log("iamge clicked")}>
                <Image
                    height={200}
                    source={{ uri: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
            </Pressable>
        </View>
    )
}

export default Learn_Pressable

const styles = StyleSheet.create({})