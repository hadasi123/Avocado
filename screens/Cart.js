import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler, Keyboard, TouchableWithoutFeedback as RNTouchable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const Cart = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Cart!</Text>
        </View>
      );
}

export default Cart;