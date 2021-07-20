import React, { useEffect, useState } from "react";
import {Image, View} from "react-native";
import {Header, Searcher, List} from "../components";
import {commonService} from "../services";

const Home = () => {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    var newResults = [];

    const fetchResults = async () => {

      commonService.getData({query}).then(res => {
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
            <Header icon={<Image
                style={{height:30, width:30}}
                source={require('../assets/logo.png')}/>}/>
            <Searcher callback={updateQuery}/>
            <List data={searchResults}/>
        </View>
      );
}

export default Home;