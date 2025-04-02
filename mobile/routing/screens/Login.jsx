import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const { navigate } = useNavigation()
    return (
        <View>
            <Text>Login</Text>
            <Button
                title='login'
                onPress={e => navigate("home")} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})