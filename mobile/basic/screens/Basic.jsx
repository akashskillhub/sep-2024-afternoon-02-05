import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Basic = ({ data }) => {
    return <>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Text style={styles.big}>Basic {data}</Text>
            <Text style={styles.fancy}>Basic {data}</Text>
        </View>
    </>

}

export default Basic

const styles = StyleSheet.create({
    big: { fontSize: 30 },
    fancy: { fontSize: 30, backgroundColor: "red" }
})