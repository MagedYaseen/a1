import * as React from "react";
import {Component} from "react";
import {AsyncStorage, StyleSheet, View, Text, Button, Alert} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from './Tabs/MainBottomTabs';

import ScreenSignin from './Screens/Auth/ScreenSignin';
import ScreenSignup from './Screens/Auth/ScreenSignup';

   
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
     
      <View style={styles.container}>
          {
              (this.state.login) ? (
                //   <View>
                //   <Text>Login</Text>
                //       </View>
                    <ScreenSignin test={this.state.test} regstate={this.regstate} />
                  ) : (
                    //   <View>
                    // <Text>Reg</Text>
                    //   </View>
                  <ScreenSignup test={this.state.test} loginstate={this.loginstate}  />
              )
          }
      </View>
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