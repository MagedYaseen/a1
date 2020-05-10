// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from "react";
import {Component} from "react";
import {AsyncStorage, StyleSheet, View, Text} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from './Tabs/MainBottomTabs';
// import StackAuth from './Stacks/StackAuth';

import ScreenSignin from './Screens/Auth/ScreenSignin'
import SecreenSignup from './Screens/Auth/SecreenSignup'
// import ScreenDashboard from './Screens/Auth/ScreenDashboard'

import StackAuth from './Stacks/StackAuth';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {


  

  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={SecreenSignup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={ScreenSignin} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={ScreenDashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}


async function fetchapi() {
  let url ='http://voomapp.magedyaseen.net/processapi.php';
  // const query = await fetch(url);
  // const data = await query.json();
  // console.log('data');
  // console.log(data);

////////////////////////////////////////

fetch (url, {
  method: 'POST',
  body: JSON.stringify({
    vomcrud: 'toprates',
    uname: 'Maged'
  }),
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(res=>res.json())
.catch(error=>console.error('Error: ' , error))
.then(response=>{console.log(response.result)})
;

  // console.log(fetch(url));
  // await fetch(url)
  // .then(response =>  console.log(response.json()) )
  // .then(data => console.log(data) )
  // .catch(error => console.log(error));
}

   
export default class App extends Component {
  
constructor() {
  console.log('constructor');
  
  super();
  // this.login = this.login.bind(this);

  this.state = {
    loggedin: false,
    user: null,
    login: true,
    register: false,
    test: 'TEST'
  }

  // AsyncStorage.setItem('x', '');
  
  // console.log('constructor get storage x: ', AsyncStorage.getItem("loggedin"));
}

login =  () =>   {
  // let state = this.state;
  // let user = AsyncStorage.getItem('loggedin');
  let user = 1;
  let loggedin = true;
  this.setState({
    user, loggedin
  }, ()=> {
    // AsyncStorage.setItem('loggedin', false);
    // AsyncStorage.setItem('user', null);
    // console.log(this.state);
    
  });
  console.log('AsyncStorage', AsyncStorage.getItem('loggedin'));
}

async componentDidMount() {
  console.log('componentDidMount');
  // console.log(AsyncStorage.getItem("x"));
  // console.log('componentDidMount get storage x - 1: ', AsyncStorage.getItem("loggedin"));
  // this.login();
  // AsyncStorage.setItem('x', '');
  if (!this._unmounted) {
    // const value = await AsyncStorage.getItem("loggedin");
    // const value = AsyncStorage.getItem("loggedin");
    // this.setState({ loggedin: value });
    // this.setState({ user: value });
    // console.log('Next is state user:');
    // console.log(this.state.user);
  }
  // console.log('componentDidMount get storage x - 2: ', AsyncStorage.getItem("loggedin"));
  // let as_loggedin = AsyncStorage.getItem("loggedin").then( (value) => {
    // console.log('componentDidMount as_loggedin: ', typeof(value), value);
  // });
  }


  componentWillUnmount() {
    console.log('componentWillUnmount');
    this._unmounted = false;
  }

  // parentMethod(data) {  
  //   console.log('parentMethod');
  //   console.log(data);
  // }
  loginstate = () => {
    this.setState({
      login: true,
      register: false,
      test: 'Login'
    })
  }
  
  regstate = () => {
    this.setState({
      loin: false,
      register: true,
      test: 'Register'
    })
  }

  render () {

    return(
           <NavigationContainer>
             {

               ( this.state.loggedin && this.state.user  ) ?
               (
                 <MainBottomTabs /> 
               )
               : 
               ((
                 (this.state.login == true) ? (<ScreenSignin test={this.state.test} loginstate={this.loginstate} />) : (<SecreenSignup regstate={this.regstate} />)
               ))
              }   
            </NavigationContainer>
          // <View>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{this.state.test}</Text>
          //   <Text>{(this.state.login) ? 'Login': 'logout'}</Text>
          // </View>
    );

    // return (
      
    //      <NavigationContainer>
    //         <MainBottomTabs /> 
    //      </NavigationContainer>
    // );
    // return (
    //    <NavigationContainer>
    //     {
    //       (this.state.user == null ) ?  
    //        (
             
    //          <StackAuth onRef={ref => (this.parentReference = ref)}
    //          parentReference = {this.parentMethod.bind(this)}/> 
    //          )
    //        :
    //        (
             
    //          <MainBottomTabs /> 
    //          )
    //         }
    //                </NavigationContainer>
    //   );   
      
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