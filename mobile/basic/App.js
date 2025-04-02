import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Basic from './screens/Basic'
import Learn_Image from './screens/01_image/Learn_Image'
import Learn_Scroll from './screens/02-scroll/Learn_Scroll'
import Learn_Text_Input from './screens/03-input/Learn_Text_Input'
import Learn_ActivityIndicator from './screens/04-Spinner/Learn_ActivityIndicator'
import Learm_Button from './screens/05-button/Learm_Button'
import Learn_Pressable from './screens/06-pressable/Learn_Pressable'
import Learn_Modal from './screens/07-modal/Learn_Modal'

const App = () => {
  return <View style={{ margin: 20 }}>
    <StatusBar hidden />
    {/* <Basic data="dell" /> */}
    {/* <Learn_Image /> */}
    {/* <Learn_Scroll /> */}
    {/* <Learn_Text_Input /> */}
    {/* <Learn_ActivityIndicator /> */}
    {/* <Learm_Button /> */}
    {/* <Learn_Pressable /> */}
    <Learn_Modal />
  </View>
}

export default App

const styles = StyleSheet.create({})