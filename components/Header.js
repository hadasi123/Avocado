import React from "react";
import { View, StyleSheet,TouchableOpacity} from "react-native";
import Hebrew from "../assets/hebrew.svg";
import English from "../assets/english.svg";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as colors from "../constants/colors";
import {connect} from "react-redux";
import * as actions from "../store/actions";

const Header = (props) => {

    const onBackPress = () => {
        //do some logic;
    }

    const onLanguagePress = ()=> {
        if (props.language==="he")
        props.dispatch({
            type: actions.CHANGE_LANGUAGE,
            payload: { language: 'en' }
          });
        else
        props.dispatch({
            type: actions.CHANGE_LANGUAGE,
            payload: { language: 'he' }
          });
    }
    
    return(
        <View style={styles.container}>

            <TouchableOpacity onPress={onBackPress}>
                <MaterialCommunityIcons
                name="arrow-right-bold"
                color={colors.blue} size={30} />  
            </TouchableOpacity>
           
            {props.icon}

            <TouchableOpacity onPress={onLanguagePress}>
                {(props.language==="he")? <Hebrew width={30} height={20}/> : <English width={30} height={20}/>}
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

const mapStateToProps = (state, props) => {
    return { language: state.language };
  }
export default connect(mapStateToProps)(Header);