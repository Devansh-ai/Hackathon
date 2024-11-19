import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const Square = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {props?.type}</Text>
            <Text style={styles.amount}>{props?.amount}</Text>

        </View>
    )
}

export default Square

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    amount: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        margin: 10,
        backgroundColor: '#7f3dff',
        aspectRatio: 1,
        width: SCREEN_WIDTH * 0.4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
})