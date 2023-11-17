import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const FrogCard = () => {

    return (<>
        <View style={style.card}>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
                <View
                    style={{
                        backgroundColor: "#ba34ec",
                        width: 80,
                        height: 80,
                        left: 20,
                        borderRadius: 100,

                    }}
                />

            </View>
            <View style={style.cardView}>
                <View style={{ backgroundColor: "#a91210" }}>
                    <Text style={{ ...style.cardTitle }}>
                        Frog Name
                    </Text>
                </View>

            </View>
            <View style={style.cardData}>
                <Text style={{ ...style.cardTitle, fontSize: 20 }}>
                    Description
                </Text>
                <Text style={{ textAlign: "center", marginHorizontal: 50 }}>
                    Brief Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus cumque quo similique, fugit nesciunt accusamus voluptatibus omnis magnam quaerat. Cum suscipit provident rerum molestias omnis nulla mollitia ab quasi.
                </Text>
                <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#e86e30",
                            width: 50,
                            height: 50,
                            left: 20,
                            borderRadius: 100,

                        }}
                    />
                    <Text>
                        Frog Sing
                    </Text>
                </View>
            </View>

        </View>
    </>
    )
}


const style = StyleSheet.create({
    card: {
        backgroundColor: "#81e936",
        flex: 1
    },
    cardTitle: {
        fontSize: 25,
        color: "black",
        textAlign: "center",
    },
    cardView: {
        backgroundColor: "#e11023",
        flex: 1
    },
    cardData: {
        backgroundColor: "#0bb2e6",
        flex: 1
    },

})