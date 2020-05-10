import React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";

import  StackInfo  from "../Stacks/StackInfo";
import  ScreenMission from "../Screens/About/ScreenMission";
import  ScreenVision from "../Screens/About/ScreenVision";
import  ScreenView from "../Screens/About/ScreenView";

const Drawer = createDrawerNavigator();

export default function DrawerAbout() {
    return (
      <Drawer.Navigator initialRouteName="Mission">
        <Drawer.Screen name="Info" component={StackInfo} />
        <Drawer.Screen name="Mission" component={ScreenMission} />
        <Drawer.Screen name="Vision" component={ScreenVision} />
        <Drawer.Screen name="View" component={ScreenView} />
      </Drawer.Navigator>
    );
  }