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


export const resetStackAndNavigate = (navigation, path) => {
  navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: path }] }));
};

export default class ScreenSignin extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      user: '',
      wrongLogin: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  // userLogin = () => {
  //   if(this.state.email === '' && this.state.password === '') {
  //     Alert.alert('Enter details to signin!')
  //   } else {
  //     this.setState({
  //       isLoading: true,
  //     })
  //     firebase
  //     .auth()
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then((res) => {
  //       console.log(res)
  //       console.log('User logged-in successfully!')
  //       this.setState({
  //         isLoading: false,
  //         email: '', 
  //         password: ''
  //       })
  //       setAsyncStorage();
  //       // this.props.navigation.navigate('Dashboard')
  //     })
  //     .catch(error => this.setState({ errorMessage: error.message }))
  //   }
  // }

  // var that = this;
  // if(this.state.email === '' && this.state.password === '') {
  // Alert.alert('Enter details to signin!')
  // } else {
  userLogin = () => {

    let login_data = this.state;

    delete login_data.isLoading;
    delete login_data.user;
    delete login_data.wrongLogin;
    const values = Object.values(login_data);

    const msgTitle = 'Invalid Login Data';

    if ( values.includes('') ) {
      Alert.alert(msgTitle, 'All fields are required');
      return;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(login_data.email)) {
      Alert.alert(msgTitle, 'Email is not valid!!!!');
      return;
    }


    if (!(/[a-zA-Z0-9`~!@#$%^&*()-_=+,.<>/?]{6,}$/g).test(login_data.password)) {
      Alert.alert(msgTitle, 'Check that you entered a valid password!');
      return;
    }

    login_data['ejocrud'] = 'loginuser';

        login(login_data).then( ( res ) => {
          if ( res.success ) {
            AsyncStorage.setItem('loggedin', true);
            if (typeof this.props.login === 'function') {
              // this.props.onPress()
              console.log('Function');
            } else {
              console.log(typeof this.props.login );
            }
           this.props.login(res.id, true);
          } 
          Toast.showWithGravity(res.msg, Toast.LONG, Toast.TOP);
        });
    
    return;

    
    this.setState({
      isLoading: true,
    }, () => {
      setTimeout(() => {
        // console.log('Test');

        // console.log('Before');
        // console.log(this.state);
        this.setState({
          isLoading: false,
        });
        const user = null;
        const loggedin = false;

        if (user == null || loggedin == false) {
          this.setState({ wrongLogin: true });
          setTimeout(() => {
            this.setState({ wrongLogin: false });
          }, 2000)
        }
        // this.props.login(user, loggedin);
      }, 3000);
    });
  }

  // AsyncStorage.setItem('x', 'Maged Yaseen');
  // this.setState({
  //   user: 'Maged Yaseen'
  // }, () => {
  // });
  // console.log('After');
  // console.log(this.state);
  // console.log(this);

  //After Login successfully
  // this.props.navigation.navigate('ScreenDashboard');
  // this.props.navigation.dispatch(NavigationActions.reset({
  //   index: 0,
  //   key: null,
  //   actions: [
  //     NavigationActions.navigate({ routeName: 'App'})
  //   ]
  // }))

  // this.props.navigation.navigate(StackHome);
  // this.props.navigation.;
  // console.log(this.parentReference );
  // this.props.parentMethod('data');
  // this.props.navigation.dispatch(
  //   CommonActions.navigate({
  //     name: 'StackHome',
  //     params: {},
  //   })
  // );
  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({ routeName: 'StackHome' })],
  // });
  // this.props.navigation.dispatch(resetAction);

  // this.props.navigation.replace ('Home');
  // this.props.navigation.dispatch(
  //   CommonActions.reset({
  //     index: 0,
  //     routes: [
  //       {
  //         name: 'StackHome',
  //         params: { user: 'jane' },
  //       },
  //     ],
  //   })
  // );
  // this.props.navigation.navigate(
  // 'StackHome', 
  // {}
  // )


  // }
  // )
  // reload();
  // this.props.navigation.navigate('ScreenHome');
  // RNRestart.Restart();

  // this.props.reload;
  // console.log(that.props.navigation.navigate('Home', { screen: 'Home' }));
  // that.props.navigation.push( ScreenHome );
  // console.log('User logged-in successfully!')
  // this.setState({
  // isLoading: false,
  // email: '', 
  // password: ''
  // })
  // })
  // .catch(error => this.setState({ errorMessage: error.message }))
  // }

  setAsyncStorage() {
    // console.log(AsyncStorage);
    AsyncStorage.setItem('x', 'Maged Yaseen');
    this.setState({ user: 'Maged Yaseen' })
  }

  wrongLoginData = () => {
    return (
      <View style={styles.wrong}>
        <Text>Wrong Data Provided</Text>
      </View>
    )
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    if (this.state.wrongLogin) {
      return (
        <View style={styles.wrong}>
          <Text>Wrong Data Provided</Text>
        </View>
      )
    }

    //     if (this.state.user != '') {
    // return(
    //   <NavigationContainer>
    //   <MainBottomTabs /> 
    // </NavigationContainer>
    // )
    //     }

    //     if(this.state.user != ''){
    //       // reload;
    //       // this.props.navigation.navigate('Home')
    // return(
    //   <View>
    //     <ScreenHome />
    //   </View>
    // )
    //     }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.userLogin()}
        />

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Sign up')}>
          Don't have account? Click here to signup
        </Text>
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