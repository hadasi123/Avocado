import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler, Keyboard,  TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as strings from "../constants/strings"

const Searcher = (props) => {

    const [text, onChangeText] = useState(props.text);

    return(
        <View style={styles.container}>
            <TextInput  style={styles.input}
                        //onEndEditing={}
                        multiline={true}
                        maxLength={40}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder={strings.search_hint}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection:"row",
        alignItems:"center"
    },
    input: {
        height:50,
        flex:1,
        backgroundColor:"#106376",
        paddingHorizontal:20}

});
export default Searcher;