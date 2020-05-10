import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScreenView({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Screen View!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }