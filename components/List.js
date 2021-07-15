import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default List;