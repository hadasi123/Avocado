import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as strings from "../constants/strings";

const CustomButton = (props) => {

    return(
        <View style={styles.container}>
            {props.available? 
                <MaterialCommunityIcons 
                    name="cart"
                    color={"#000000"}
                    size={20} /> :
                <MaterialCommunityIcons
                    name="close-octagon"
                    color={"#000000"}
                    size={20} />}
                
            <Text style={styles.text}>
                {props.available?
                    strings.add_to_cart : 
                    strings.not_available}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:40,
        backgroundColor:"#fcba03",
        flex:1,
        flexDirection:"row-reverse",
        paddingHorizontal:8,
        marginHorizontal:8,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    image: {
        height:30,
        width:30,
        paddingHorizontal:10
    },
    text: {
        textAlign:"right"
    }
});

export default CustomButton;