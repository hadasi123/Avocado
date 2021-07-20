import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Home, Cart, Favorites, Profile, Categories} from "../screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator  backBehavior="initialRoute"
                        tabBarOptions={{
                        activeBackgroundColor: colors.light_blue,
                        keyboardHidesTabBar:true}}>

          <Tab.Screen name={strings.home}
                      component={Home}
                      options={{
                        tabBarIcon:() => 
                      (<MaterialCommunityIcons name="home"
                        color={colors.blue}
                        size={30} />)}}/>

          <Tab.Screen name={strings.cart}
                      component={Cart}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="cart"
                      color={colors.blue}
                      size={30} />)}}/>

          <Tab.Screen name={strings.profile}
                      component={Profile}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="account"
                      color={colors.blue}
                      size={30} />)}}/>

          <Tab.Screen name={strings.favorites}
                      component={Favorites}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="cards-heart"
                      color={colors.blue}
                      size={30} />)}}/>

          <Tab.Screen name={strings.categories}
                      component={Categories}
                      options={{tabBarIcon:() => 
                      (<MaterialCommunityIcons name="shape"
                      color={colors.blue}
                      size={30} />)}}/>
                      
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

export default Navigator;