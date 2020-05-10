import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import ScreenServices from '../Screens/Services/ScreenServices';

const Stack = createStackNavigator();

export default function StackServices({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Services" component={ScreenServices} />
      </Stack.Navigator>
    );
  }