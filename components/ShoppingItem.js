import React from "react";
import { View, StyleSheet, Text,Image } from "react-native";
import { CustomButton } from "../components";
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShoppingItem = (props) => {

const {name, price, image_url, active_in_store} = props

return(
<View style={styles.container}>

    <Image source={{uri: image_url,}} style={styles.image}/>
    <View style={styles.description}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{price/100+"₪"}</Text>
    </View>

    {active_in_store?
    <CustomButton   text={strings.add_to_cart} 
                    backgroundColor={colors.yellow}
                    icon={ <MaterialCommunityIcons 
                    name="cart"
                    color={colors.black}
                    size={20} />} /> :
    <CustomButton   text={strings.not_available}
                    backgroundColor={colors.white}
                    icon={<MaterialCommunityIcons
                    name="close-octagon"
                    color={colors.black}
                    size={20} />}/>}
    
</View>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.white,
        flex:1,
        flexDirection:"row-reverse",
        justifyContent:"space-around",
        paddingHorizontal:8,
        marginBottom:1,
        alignItems:"center"
    },
    image: {
        height:90,
        width:90,
        marginLeft:10
    },
    description: {
        flex:1,
        flexDirection:"column",
    },
    text: {
        textAlign:"right"
    }
});

export default ShoppingItem;