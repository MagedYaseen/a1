import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import ScreenSignin from '../Screens/Auth/ScreenSignin';
import SecreenSignup from '../Screens/Auth/SecreenSignup';
// import StackHome from './StackHome';

const Stack = createStackNavigator();

export default function StackAuth( props ) {
    return ( 
      <Stack.Navigator>
        <Stack.Screen name="Login"  login={props.login} component={ScreenSignin} />
        <Stack.Screen name="Sign up" component={SecreenSignup} />
        {/* <Stack.Screen name="StackHome" component={StackHome} /> */}
      </Stack.Navigator>
    );
  }