import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator, Button, Card, Chip, Divider, Snackbar, TextInput } from 'react-native-paper'
import { useAddTodoMutation } from '../redux/mobile-todo-api'

const Home = () => {
    const [task, setTask] = useState()
    const [desc, setDesc] = useState()
    const [priority, setPriority] = useState()
    const [addTodo, { isSuccess, isLoading, isError, error, reset }] = useAddTodoMutation()

    if (isLoading) {
        return <View>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    }

    return <View style={{ padding: 15 }}>
        <Card >
            <Card.Title title="Todo App" />
            <Card.Content style={{ gap: 10 }}>
                <TextInput onChangeText={val => setTask(val)} label="Enter Task" mode='outlined' />
                <TextInput onChangeText={val => setDesc(val)} multiline label="Enter Desc" mode='outlined' />
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <Chip
                        onPress={e => setPriority("High")}
                        mode={priority === "High" ? "flat" : 'outlined'}>High</Chip>
                    <Chip
                        onPress={e => setPriority("Medium")}
                        mode={priority === "Medium" ? "flat" : 'outlined'}>Medium</Chip>
                    <Chip
                        onPress={e => setPriority("Low")}
                        mode={priority === "Low" ? "flat" : 'outlined'}>Low</Chip>
                </View>
                <Divider />
            </Card.Content>
            <Card.Actions style={{ marginTop: 20 }}>
                <Button>Cancel</Button>
                <Button onPress={e => addTodo({ task, desc, priority })}>Add</Button>
            </Card.Actions>
        </Card>

        <Snackbar onDismiss={reset} duration={3000} visible={isSuccess}>Todo Create Success</Snackbar>
        <Snackbar onDismiss={reset} duration={3000} visible={isError}>
            {isError ? error.meesage : "unable to create todo"}
        </Snackbar>

    </View>
}

export default Home

const styles = StyleSheet.create({})