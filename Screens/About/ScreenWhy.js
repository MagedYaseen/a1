import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScreenWhy({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Screen Why!</Text>
        <Button title="Go to Mission" onPress={() => navigation.navigate("Mission")} />
        <Button title="Go to Vision" onPress={() => navigation.navigate("Vision")} />
        <Button title="Go to View" onPress={() => navigation.navigate("View")} />
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }