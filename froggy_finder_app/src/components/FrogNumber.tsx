import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FrogNumber = () => {
    return (
        <View style={style.frogNumberLogo} >
            <Text style={style.frogNumber}>018</Text>
        </View>
    )
}

const style = StyleSheet.create({
    frogNumberLogo: {
        backgroundColor: "#885599",
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: "center"


    },
    frogNumber: {
        fontSize: 30,
        textAlign: "center",
        backgroundColor: "yellow",
    }
})