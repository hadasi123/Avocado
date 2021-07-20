import React, { useEffect, useState } from "react";
import {Image, View} from "react-native";
import {Header, Searcher, List} from "../components";
import {commonService} from "../services";

const Home = () => {

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    var newResults = [];

    const fetchResults = async () => {

      console.log("inside fetch")

      commonService.getData({   'by_company_id':'129',
      'mode':'suggest',
      'page':'1',
      'per_page':'45',
      'query':query})

       
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
        console.log("inside use effect")
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