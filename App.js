import React from 'react';
import {View,StatusBar,StyleSheet} from 'react-native';
import {Home, Cart, Favorites, Profile, Categories} from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as strings from "./constants/strings";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={ 'light-content'} />
      <NavigationContainer >
        <Tab.Navigator >
          <Tab.Screen name={strings.home}
                      component={Home}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="home" color={"#0398fc"} size={30} />)}}/>

          <Tab.Screen name={strings.cart}
                      component={Cart}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="cart" color={"#0398fc"} size={30} />)}}/>
          <Tab.Screen name={strings.profile}
                      component={Profile}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="account" color={"#0398fc"} size={30} />)}}/>
          <Tab.Screen name={strings.favorites}
                      component={Favorites}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="cards-heart" color={"#0398fc"} size={30} />)}}/>
          <Tab.Screen name={strings.categories}
                      component={Categories}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="shape" color={"#0398fc"} size={30} />)}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {   
    flex:1,
    justifyContent:"flex-start"
  },
});

export default App;