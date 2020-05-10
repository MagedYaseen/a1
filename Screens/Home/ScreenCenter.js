import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ScreenCenter({ navigation }) {
    return (
      <View>
        <Text>Center Screen</Text>
        <Button
          title="Go to Center Details Page"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }
  
