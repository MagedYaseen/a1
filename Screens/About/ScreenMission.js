import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScreenMission({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Screen Mission!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go to About" onPress={() => navigation.navigate("About")} />
      </View>
    );
  }