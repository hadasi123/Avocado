import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, BackHandler, Keyboard } from "react-native";
import {Header, Searcher, List} from "../components";
import axios from 'axios';

const Home = (props) => {

    var instance = axios.create({
        baseURL: 'https://ops.avo.co.il/api/v1/products/search?',
        headers: {'Accept': 'application/json', 'X-Warehouse-Code':'tel_aviv'}
      });

    const [query, setQuery] = useState("בירה");
    const [searchResults, setSearchResults] = useState([]);
    var newResults = [];

    const fetchResults = async () => {
        instance.defaults.params = ({'by_company_id':'129', 'mode':'suggest', 'page':'1', 'per_page':'45', 'query':query})
        instance.get()
        .then(res => {
        const results = res.data.products;
        results.forEach(function (doc) {
            var {name, price, image_url, active_in_store, id} = doc
            newResults = [...newResults, {name,price,image_url, active_in_store, id}]
          });
        setSearchResults(newResults);
      })
    }

    useEffect(() => {
        fetchResults();
    }, [query]);

    const updateQuery = (newQuery) => {
        setQuery(newQuery)
    }

    return (
        <View style={{ flex:1, justifyContent:'flex-start', flexDirection:'column'}}>
            <Header></Header>
            <Searcher callback={updateQuery}></Searcher>
            <List data={searchResults}></List>
        </View>
      );

}

export default Home;