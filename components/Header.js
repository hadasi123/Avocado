import React from "react";
import { View, Image, StyleSheet, Text, BackHandler, Keyboard} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Hebrew from "../assets/hebrew.svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props) => {

    return(
        <View style={styles.container}>
           <MaterialCommunityIcons name="arrow-right-bold" color={"#0398fc"} size={30} />
            <Image style={{height:30, width:30}}source={require('../assets/logo.png')}></Image>
            <Hebrew width={30} height={20}></Hebrew>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        paddingHorizontal:16,
        alignItems:"center",
    },

});

export default Header;