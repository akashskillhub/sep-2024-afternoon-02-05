import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Card, MD2Colors, MD3Colors } from 'react-native-paper'
import { useDeleteTodoMutation, useLazyGetTodosQuery, useUpdateTodoMutation } from '../redux/mobile-todo-api'

const History = () => {
    const [getTodos, { isLoading, data }] = useLazyGetTodosQuery()
    const [deleteTodo] = useDeleteTodoMutation()
    const [updateTodo, { isSuccess: updateSucess }] = useUpdateTodoMutation()

    useEffect(() => {
        getTodos()
    }, [])
    return <ScrollView refreshControl={<RefreshControl onRefresh={getTodos} refreshing={isLoading} />}>
        <View style={{ gap: 20, margin: 10 }}>
            {
                data && data.result.map(item => <Card key={item._id} style={{ backgroundColor: item.isComplete ? MD2Colors.green200 : "white" }}>
                    <Card.Title title={item.task} />
                    <Card.Content>
                        <Text>{item.desc}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            disabled={item.isComplete}
                            onPress={e => deleteTodo(item._id)}
                            buttonColor={MD3Colors.error90}>
                            Delete
                        </Button>
                        <Button
                            onPress={e => updateTodo({ _id: item._id, isComplete: !item.isComplete })}
                            mode='outlined'>
                            {item.isComplete ? "In Complete" : "Complete"}
                        </Button>
                    </Card.Actions>
                </Card>)
            }
        </View>
    </ScrollView>
}

export default History

const styles = StyleSheet.create({})