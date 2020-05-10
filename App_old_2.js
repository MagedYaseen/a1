// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from "react";
import {Component} from "react";
import {AsyncStorage, StyleSheet, View, Text, Button} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from './Tabs/MainBottomTabs';

import ScreenSignin from './Screens/Auth/ScreenSignin'
import SecreenSignup from './Screens/Auth/SecreenSignup'

   
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedin: false,
      user: null,
      login: true,
      register: false,
      test: 'TEST'
    }
}    



async componentDidMount() {
  console.log('componentDidMount');
  if (!this._unmounted) {
  }
  }


  componentWillUnmount() {
    console.log('componentWillUnmount');
    this._unmounted = false;
  }

  loginstate = () => {
    this.setState({
      login: true,
      register: false,
      test: 'Login'
    })
  }
  
  regstate = () => {
    this.setState({
      login: false,
      register: true,
      test: 'Register'
    })
  }

  render () {

    return(
      // <View style={styles.container}>
      //   <Text>{this.state.test}</Text>
      //   <Text>{this.state.test}</Text>
      //   <Button title='Click' onPress={this.regstate}></Button>
      // </View>

      <View style={styles.container}>
        <ScreenSignin test={this.state.test} loginstate={this.regstate} />
      </View>
          //  <NavigationContainer>
          //    {
          //      ( this.state.loggedin && this.state.user  ) ?
          //      (
          //        <MainBottomTabs /> 
          //      )
          //      : 
          //      (
          //        (this.state.login == true) ? (<ScreenSignin test={this.state.test} loginstate={this.regstate} />) : (<SecreenSignup regstate={this.loginstate} />)
          //      )
          //     }   
          //   </NavigationContainer>
    );
    }


  }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#eee',
      },
      text: {
        color: '#fff'        
      }
    });