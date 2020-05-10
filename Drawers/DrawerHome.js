import React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";

import StackHome  from "../Stacks/StackHome";
import StackServices  from "../Stacks/StackServices";

const Drawer = createDrawerNavigator();

export default function DrawerHome() {
    return (
      <Drawer.Navigator initialRouteName="Voom">
        <Drawer.Screen name="EJO" component={StackHome} />
        <Drawer.Screen name="Services" component={StackServices} />
      </Drawer.Navigator>
    );
  }
  