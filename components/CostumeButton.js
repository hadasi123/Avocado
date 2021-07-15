import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CostumeButton = (props) => {

    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="cart" color={"#000000"} size={20} />
            <Text style={styles.text}>{props.active_in_store? "הוסף" : "לא זמין"}</Text>
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

export default CostumeButton;