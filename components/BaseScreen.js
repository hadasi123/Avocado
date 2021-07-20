import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BaseScreen = (props) => {

    const {title, backgroundColor} = props
    const styles = useStyles(backgroundColor);

    return (
        <View style={styles.container}>
          <Text>{title}</Text>
        </View>
      );
}

const useStyles = (backgroundColor) =>
  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:backgroundColor,
    }
});

export default BaseScreen;