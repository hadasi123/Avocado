import React, {useState } from "react";
import { View, StyleSheet, BackHandler, Keyboard,  TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as strings from "../constants/strings";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Searcher = (props) => {

    const [text, onChangeText] = useState("בירה");

    return(
        <View style={styles.container}>
            <TextInput  style={styles.input}
                        onEndEditing={() => text !== "" && props.callback(text)}
                        multiline={true}
                        maxLength={40}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder={strings.search_hint}></TextInput>
            <MaterialCommunityIcons name="magnify" color={"#0398fc"} size={30} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        backgroundColor:"#fcba03",
        flexDirection:"row-reverse",
        alignItems:"center",
        paddingHorizontal:50
    },
    input: {
        height:50,
        flex:1,
        color:"#ffffff",
        paddingHorizontal:20}

});
export default Searcher;