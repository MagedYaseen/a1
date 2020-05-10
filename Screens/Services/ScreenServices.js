import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScreenServices({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Services!</Text>
        {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
        {/* <Button
          title="Go to Info Screen"
          onPress={() => navigation.navigate("Info")}
        /> */}
      </View>
    );
  }