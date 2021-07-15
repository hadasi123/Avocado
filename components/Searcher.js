import React, {useState } from "react";
import { View, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import * as strings from "../constants/strings";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Searcher = (props) => {

    const [text, onChangeText] = useState("");

    return(
        <View style={styles.container}>

            <TextInput  style={styles.input}
                        multiline={false}
                        maxLength={20}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder={strings.search_hint} />
            <TouchableOpacity
                onPress={()=>props.callback(text)}>
                <MaterialCommunityIcons name="magnify" color={"#0398fc"} size={30} />
            </TouchableOpacity>

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