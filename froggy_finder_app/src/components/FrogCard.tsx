import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SoundDemo } from './SoundDemo';

export const FrogCard = () => {

    return (<>
        <View style={style.card}>
            <View style={{
                paddingVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'space-around'

            }}
            >

                <View
                    style={{
                        backgroundColor: "#ba34ec",
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        right: 40
                    }}
                >
                    <Text style={{
                        ...style.cardTitle,
                        alignSelf: 'center',
                        top: 18,
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: 'white'
                    }}>
                        018
                    </Text>
                </View>
                <View>

                    <Text style={{ ...style.cardTitle, right: 80 }}>
                        Frog Name
                    </Text>
                    <Text style={{ ...style.cardSpecie, right: 80 }}>
                        Frog Species
                    </Text>
                </View>



            </View>
            <View style={style.cardView}>
            </View>
            <View style={style.cardData}>
                <Text style={{ ...style.cardTitle, fontSize: 20 }}>
                    Description
                </Text>
                <Text style={{ textAlign: "center", marginHorizontal: 50 }}>
                    Brief Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus cumque quo similique, fugit nesciunt accusamus voluptatibus omnis magnam quaerat. Cum suscipit provident rerum molestias omnis nulla mollitia ab quasi.
                </Text>

                {/* <View style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                >

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#e86e30",
                            width: 50,
                            height: 50,
                            borderRadius: 100,

                        }}
                    >
                        <Text>3902</Text>
                    </TouchableOpacity>
                    <Text>
                        Frog Sing
                    </Text>
                </View> */}
                <SoundDemo />
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
    cardSpecie: {
        textAlign: 'center',
        fontSize: 16
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