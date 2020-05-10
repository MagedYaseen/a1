import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import  DrawerHome  from '../Drawers/DrawerHome';
import DrawerAbout  from '../Drawers/DrawerAbout';

import ScreenFav from '../Screens/Fav/ScreenFav';
import ScreenSearch from '../Screens/Search/ScreenSearch';

const Tab = createBottomTabNavigator();

export default function MainBottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;
  
          //   if (route.name === "About") {
          //     iconName = focused
          //       ? "ios-information-circle"
          //       : "ios-information-circle-outline";
          //   } else if (route.name === "Home") {
          //     iconName = focused ? "ios-list-box" : "ios-list";
          //   }
  
          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // }
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray"
        }}
      >
        <Tab.Screen name="Home" component={DrawerHome} />
        <Tab.Screen name="About" component={DrawerAbout} />
        <Tab.Screen name="Fav" component={ScreenFav} tabBarIcon='ios-list-box' />
        <Tab.Screen name="Search" component={ScreenSearch} />
      </Tab.Navigator>
    );
  }