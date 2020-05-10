import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import ScreenWhy from '../Screens/About/ScreenWhy';
import ScreenMission from '../Screens/About/ScreenMission';
import ScreenVision from '../Screens/About/ScreenVision';

const Stack = createStackNavigator();

export default function StackInfo({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Why" component={ScreenWhy} />
        <Stack.Screen name="Mission" component={ScreenMission} />
        <Stack.Screen name="Vision" component={ScreenVision} />
      </Stack.Navigator>
    );
  }