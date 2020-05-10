import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import ScreenHome from '../Screens/Home/ScreenHome';
import ScreenCenter from '../Screens/Home/ScreenCenter';
import ScreenDetails from '../Screens/Home/ScreenDetails';

const Stack = createStackNavigator();

export default function StackHome({ navigation }) {
    return ( 
      <Stack.Navigator>
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
        <Stack.Screen name="ScreenCenter" component={ScreenCenter} />
        <Stack.Screen name="ScreenDetails" component={ScreenDetails} />
      </Stack.Navigator>
    );
  }