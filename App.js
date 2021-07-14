import React from 'react';
import {View,StatusBar,StyleSheet,Text,useColorScheme} from 'react-native';
import {Home, Cart, Favorites, Profile, Categories} from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex:1, justifyContent:"flex-start"}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer >
        <Tab.Navigator  >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Categories" component={Categories} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {   
  },
  sectionTitle: {
  },
  sectionDescription: {
  },
});

export default App;