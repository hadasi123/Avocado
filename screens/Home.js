import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler, Keyboard } from "react-native";
import {Header, Searcher, List} from "../components";


const Home = (props) => {

    return (
        <View style={{ flex:1, justifyContent:'flex-start', flexDirection:'column'}}>
            <Header></Header>
            <Searcher></Searcher>
            <List></List>
        </View>
      );

}

export default Home;