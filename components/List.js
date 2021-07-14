import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {ShoppingItem} from "../components";

const DATA = [
    {
      id: '1',
      title: 'Item',
    },
    {
      id: '2',
      title: 'Item',
    },
    {
        id: '3',
        title: 'Item',
    },
      {
        id: '4',
        title: 'Item',
    },
      {
        id: '5',
        title: 'Item',
    },
      {
          id: '6',
          title: 'Item',
        },
        {
          id: '7',
          title: 'Item',
        },
  ];
  
  const List = () => {
    const renderItem = ({ item }) => (
        <ShoppingItem></ShoppingItem>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor:"#666666",
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