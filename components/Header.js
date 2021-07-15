import React, {useState} from "react";
import { View, Image, StyleSheet,TouchableOpacity} from "react-native";
import Hebrew from "../assets/hebrew.svg";
import English from "../assets/english.svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {

    const [language, setLanguage] = useState("he")

    const onBackPress = () => {
        //do some logic;
    }

    const onLanguagePress = ()=> {
        if (language==="he")
            setLanguage("en")
            //additional logic for changing language
            //(both UI and request call with lang="en" param)
        else
            setLanguage("he")
    }
    

    return(
        <View style={styles.container}>

            <TouchableOpacity onPress={onBackPress}>
                <MaterialCommunityIcons
                name="arrow-right-bold"
                color={"#0398fc"} size={30} />  
            </TouchableOpacity>
           
            <Image
                style={{height:30, width:30}}
                source={require('../assets/logo.png')}/>

            <TouchableOpacity onPress={onLanguagePress}>
                {(language==="he")? <Hebrew width={30} height={20}/> : <English width={30} height={20}/>}
            </TouchableOpacity>

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