import React from "react";
import { View, StyleSheet, Text,Image } from "react-native";
import { CustomButton } from "../components";

const ShoppingItem = (props) => {

const {name, price, image_url, active_in_store} = props

return(
<View style={styles.container}>
    <Image source={{uri: image_url,}} style={styles.image}></Image>
    <View style={styles.description}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{price/100+"₪"}</Text>
    </View>
    <CustomButton available={active_in_store}></CustomButton>
</View>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex:1,
        flexDirection:"row-reverse",
        justifyContent:"space-around",
        paddingHorizontal:8,
        marginBottom:1,
        alignItems:"center"
    },
    image: {
        height:90,
        width:90,
        marginLeft:10
    },
    description: {
        flex:1,
        flexDirection:"column",
    },
    text: {
        textAlign:"right"
    }
});

export default ShoppingItem;