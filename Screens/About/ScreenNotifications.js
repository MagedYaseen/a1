import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScreenNotifications({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Notifications!</Text>
        <Button onPress={() => navigation.navigate("Home")} title="Go to home" />
        <Button onPress={() => navigation.goBack()} title="Go back" />
      </View>
    );
  }
  