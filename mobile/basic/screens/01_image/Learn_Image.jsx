import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from "./../../assets/icon.png"
const Learn_Image = () => {
    return <>
        <View>
            <Text>Learn_Image</Text>
            <Image
                height={200}
                source={{ uri: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />

            <Image source={Logo} style={{ height: 200, width: 200 }} />

            <View>
                <ImageBackground source={Logo} style={{ height: 200, width: 200 }}>
                    <Text>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, perspiciatis blanditiis? Quidem qui laboriosam alias, quod sed nam pariatur illum error! Eum dignissimos quas magnam quia unde, recusandae nulla architecto.  </Text>
                </ImageBackground>
            </View>

        </View>
    </>

}

export default Learn_Image

const styles = StyleSheet.create({})