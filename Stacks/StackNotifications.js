import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import ScreenNotifications from '../Screens/About/ScreenNotifications';

const Stack = createStackNavigator();

export default function StackNotifications({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Notifications" component={ScreenNotifications} />
      </Stack.Navigator>
    );
  }