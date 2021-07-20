import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButton = (props) => {

    const {text, icon, backgroundColor, onClick} = props;

    const styles = useStyles(backgroundColor);

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={onClick}>
            {icon}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const useStyles = (backgroundColor) =>
  StyleSheet.create({
    container: {
        height:40,
        backgroundColor:backgroundColor,
        flex:1,
        flexDirection:"row-reverse",
        paddingHorizontal:8,
        marginHorizontal:8,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    text: {
        textAlign:"right"
    }
});

export default CustomButton;