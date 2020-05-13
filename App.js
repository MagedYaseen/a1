import * as React from "react";
import { Component } from "react";
import { AsyncStorage, StyleSheet, View, Text, Image } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from './Tabs/MainBottomTabs';

import ScreenSignin from './Screens/Auth/ScreenSignin';
import ScreenSignup from './Screens/Auth/ScreenSignup';

export default class App extends Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
      loggedin: false,
      user: null,
      login: true,
      register: false,
      loading: true
    }

    AsyncStorage.getItem('userid').then( (val) => {
      console.log('VAL: ' , val)
      if ( val > 0 ) {
        this.setState({
          user: val,
          loggedin: true,
          loading: false
        })
      }
    });
   
    console.log('State from constructor: ' ,this.state.loggedin);
  }
  
  async componentDidMount() {

    console.log('componentDidMount');
    console.log('State from componentDidMount: ' ,this.state.loggedin);
    if (!this._unmounted) {
    }
  }
   
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
    console.log('State from componentWillUnmount: ' ,this.state.loggedin);
    this._unmounted = false;
  }

  login_reg = () => {
    this.setState({
      login: !this.state.login,
      register: !this.state.register
    })
  }

  verified_user = (id) => {
    console.log(id);
    AsyncStorage.setItem('userid', id);
    
    this.setState({loggedin: true, user: id})
    console.log('USer:' , this.state.user);
  }

  render() {

    if (this.state.loading) {
      return(
        <View>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: './assets/logo.png',
        }}
      />
        <Text>
          Loading
        </Text>
        </View>
      )
    }
    return (
      <NavigationContainer>
        {
          (this.state.loggedin && this.state.user ) ?
            (
              <MainBottomTabs />
            ) :
            (
              (this.state.login) ? (
                <ScreenSignin login_reg={this.login_reg} verified_user={this.verified_user} />
              ) : 
              (
                <ScreenSignup login_reg={this.login_reg} />
              )
            )
        }
      </NavigationContainer>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 0,
    backgroundColor: '#efefef',
  },
  text: {
    color: '#fff'
  }
});