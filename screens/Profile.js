import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler, Keyboard, TouchableWithoutFeedback as RNTouchable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const Profile = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
        </View>
      );
}

export default Profile;