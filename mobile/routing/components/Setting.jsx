import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Setting = () => {
    const { navigate } = useNavigation()
    return <View>
        <Text>Setting</Text>
        <Button
            onPress={e => navigate("login")}
            title='Logout'
            color="red" />
    </View>

}

export default Setting

const styles = StyleSheet.create({})