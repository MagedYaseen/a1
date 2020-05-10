import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import SecreenSignup from './SecreenSignup';
import { login } from '../../api/api';
import Toast from 'react-native-simple-toast';

// import { reload } from 'expo/build/Updates/Updates';
// import firebase from '../../database/firebase';
import StackHome from '../../Stacks/StackHome';
import ScreenHome from '../Home/ScreenHome';
// import RNRestart from 'react-native-restart';
import { reload } from 'expo/build/Updates/Updates';
// import { CommonActions } from '@react-navigation/native';
// import { StackActions, NavigationActions } from 'react-navigation';
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from '../../Tabs/MainBottomTabs';
import { NavigationActions } from '@react-navigation/native'

import ScreenDashboard from './ScreenDashboard';


// export const resetStackAndNavigate = (navigation, path) => {
//   navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: path }] }));
// };

export default ScreenSignin = (props) => {

  InputVal = (val, prop) => {
    // const state = state;
    // state[prop] = val;
    // setState(state);
  }

  // userLogin = () => {
  //   if(state.email === '' && state.password === '') {
  //     Alert.alert('Enter details to signin!')
  //   } else {
  //     setState({
  //       isLoading: true,
  //     })
  //     firebase
  //     .auth()
  //     .signInWithEmailAndPassword(state.email, state.password)
  //     .then((res) => {
  //       console.log(res)
  //       console.log('User logged-in successfully!')
  //       setState({
  //         isLoading: false,
  //         email: '', 
  //         password: ''
  //       })
  //       setAsyncStorage();
  //       // props.navigation.navigate('Dashboard')
  //     })
  //     .catch(error => setState({ errorMessage: error.message }))
  //   }
  // }



    return (
      <View style={styles.container}>
        <Text>{props.test}</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          // value={state.email}
          onChangeText={(val) => updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          // value={state.password}
          onChangeText={(val) => updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => userLogin()}
        />

        <Button
          style={styles.loginText}
          onPress={()=>props.loginstate}
          title="Don't have account? Click here to signup"
            >
        </Button>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  wrong: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});