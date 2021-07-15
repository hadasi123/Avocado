import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import {ShoppingItem} from "../components";

const List = (props) => {

    const renderItem = ({ item }) => (
        <ShoppingItem
            name={item.name}
            price={item.price}
            image_url={item.image_url}
            active_in_store={item.active_in_store}
        ></ShoppingItem>
    );
  
    return (
      <SafeAreaView>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

export default List;