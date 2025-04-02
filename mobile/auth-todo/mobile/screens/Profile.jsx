import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, List, Surface } from 'react-native-paper'
import { useMobileLogoutMutation } from '../redux/apis/mobile-auth.api'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from "@react-native-async-storage/async-storage"
import Loading from '../components/Loading'
const Profile = () => {
    const { user } = useSelector(state => state.auth)
    const { navigate } = useNavigation()
    const [logout, { isSuccess, isError, error, isLoading, reset }] = useMobileLogoutMutation()

    useEffect(() => {
        if (isSuccess) {
            AsyncStorage.removeItem("mobile-user")
                .then(() => navigate("login"))
                .catch(err => console.log(err))
        }
    }, [isSuccess])
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        console.log(error)
    }
    return <View style={{ padding: 15 }}>
        {
            user && <Surface style={{ padding: 10 }}>
                <List.Section>
                    <List.Item title={user.name} left={() => <List.Icon icon="account" />}></List.Item>
                    <List.Item title={user.email} left={() => <List.Icon icon="email" />}></List.Item>
                </List.Section>
                <Button onPress={logout} mode='contained'>Logout</Button>
            </Surface>
        }
    </View>
}

export default Profile

const styles = StyleSheet.create({})