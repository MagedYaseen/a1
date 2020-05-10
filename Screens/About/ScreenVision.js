import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScreenVision({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Screen Vision!</Text>
        <Button title="Go to Mission" onPress={() => navigation.navigate("Mission")} />
      </View>
    );
  }