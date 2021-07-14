import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler, Keyboard, TouchableWithoutFeedback as RNTouchable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const Favorites = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Favorites!</Text>
        </View>
      );
}

export default Favorites;