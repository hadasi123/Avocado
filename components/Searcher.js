import React, {useState } from "react";
import { View, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";
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
                <MaterialCommunityIcons name="magnify" color={colors.blue} size={30} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        backgroundColor:colors.yellow,
        flexDirection:"row-reverse",
        alignItems:"center",
        paddingHorizontal:50
    },
    input: {
        height:50,
        flex:1,
        color:colors.white,
        paddingHorizontal:20}
});

export default Searcher;