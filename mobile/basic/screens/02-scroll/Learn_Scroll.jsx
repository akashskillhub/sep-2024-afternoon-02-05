import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Learn_Scroll = () => {
    console.log(Dimensions.get("screen").height)

    const arr = [
        { id: 1, name: "test 1", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, name: "test 2", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, name: "test 3", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "test 4", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 5, name: "test 5", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 6, name: "test 6", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 7, name: "test 7", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 8, name: "test 8", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 9, name: "test 9", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 10, name: "test 10", img: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ]

    return <View >
        <View View style={{ flexDirection: "row", gap: 10 }}>
            <ScrollView horizontal>
                {
                    arr.map(item => <View >
                        <Image source={{ uri: item.img }} height={100} width={100} />
                        <Text>{item.name}</Text>
                    </View>)
                }
            </ScrollView>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
            <View >
                <Text style={styles.big}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus esse officiis aut exercitationem, laborum ducimus aliquam rem perspiciatis numquam. Eius rem tempora et molestias recusandae iure possimus, eum culpa aliquid at reprehenderit eveniet nisi voluptate qui, non atque! Laboriosam quibusdam delectus quasi iure perspiciatis dicta quas beatae assumenda voluptatum explicabo earum id quos minima neque enim, sed, facere provident quis doloremque. Ad modi dolor magni maxime, repellat autem dolore dolorem doloremque enim quas natus quam illum quia ea labore! Eum voluptates alias perspiciatis. Iure aliquam, architecto eaque magnam doloremque repellendus reprehenderit voluptatem veritatis praesentium rem? Delectus quaerat tenetur aut explicabo?
                </Text>
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1742239485258-dc3f1b044c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                    height={200} />
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </View>
        </ScrollView>
    </View>

}

export default Learn_Scroll

const styles = StyleSheet.create({
    big: { fontSize: 30 }
})