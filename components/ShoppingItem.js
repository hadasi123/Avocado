import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text,Image, BackHandler, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ShoppingItem = (props) => {
return(
<View style={styles.container}>
    <Image source={require('../assets/logo.png')} style={styles.image}></Image>
    <View style={styles.description}>
        <Text style={styles.text}>שם המוצר</Text>
        <Text style={styles.text}>מחיר</Text>
        <Text style={styles.text}>מידע נוסף</Text>
    </View>
</View>
);
}

const styles = StyleSheet.create({
    container: {
        height:100,
        backgroundColor:"#f2f2f2",
        flex:1,
        flexDirection:"row-reverse",
        paddingHorizontal:16,
        marginBottom:1,
        alignItems:"center"
    },
    image: {
        height:90,
        width:90,
        paddingHorizontal:10
    },
    description: {
        flex:1,
        flexDirection:"column",
    },
    text: {

    }

});


export default ShoppingItem;