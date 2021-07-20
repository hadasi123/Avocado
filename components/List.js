import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import {ShoppingItem} from "../components";

const List = (props) => {

    const renderItem = ({ item }) => {

      const {name, price, image_url, active_in_store} = item

      return (
        <ShoppingItem
            name={name}
            price={price}
            image_url={image_url}
            active_in_store={active_in_store}
        />
      )};
  
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