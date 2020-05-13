import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import ScreenSignin from '../Screens/Auth/ScreenSignin';
import ScreenSignup from '../Screens/Auth/ScreenSignup';
// import StackHome from './StackHome';

const Stack = createStackNavigator();

export default function StackAuth( props ) {
    return ( 
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={ScreenSignin}  test={props.test} regstate={props.regstate} loginstate={props.loginstate} />
        <Stack.Screen name="Sign up" component={ScreenSignup} test={props.test} regstate={props.regstate} loginstate={props.loginstate} />
        {/* <Stack.Screen name="StackHome" component={StackHome} /> */}
      </Stack.Navigator>
    );
  }