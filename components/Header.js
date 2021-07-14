import React, { useRef, useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, BackHandler, Keyboard} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const Header = (props) => {

    return(
        <View style={styles.container}>
            <Text>Back</Text>
            <Text>avocado</Text>
            <Text>Local</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        paddingHorizontal:16,
        alignItems:"center"
    },

});

export default Header;