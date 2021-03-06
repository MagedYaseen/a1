import React, { useState } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import SecreenSignup from './ScreenSignup';
import { login } from '../../api/api';
import Toast from 'react-native-simple-toast';

// import { reload } from 'expo/build/Updates/Updates';
// import firebase from '../../database/firebase';
// import RNRestart from 'react-native-restart';
// import { CommonActions } from '@react-navigation/native';
// import { StackActions, NavigationActions } from 'react-navigation';
import StackHome from '../../Stacks/StackHome';
import ScreenHome from '../Home/ScreenHome';
import { reload } from 'expo/build/Updates/Updates';
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from '../../Tabs/MainBottomTabs';
import { NavigationActions } from '@react-navigation/native'

import ScreenDashboard from './ScreenDashboard';


// export const resetStackAndNavigate = (navigation, path) => {
//   navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: path }] }));
// };

export default ScreenSignin = (props) => {

  const [email, setEmail] = useState("magedyaseen@gmail.com");
  const [password, setPassword] = useState("Maged@2020");
  const [isLoading, setIsLoading] = useState(false);

  const errMsgTitle = 'Invalid Login Data';

  go_register = () => {
    
    props.login_reg();
  }

  updateInputVal = (val, prop) => {
    // const state = state;
    // state[prop] = val;
    // setState(state);
  }

  userLogin = () => { 
    if (email === '' || password === '') {
      Alert.alert(errMsgTitle, 'Email and Password are required to sign in!')
    return;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
      Alert.alert(errMsgTitle, 'Email is not valid!!!!');
      return;
    }


    if (!(/[a-zA-Z0-9`~!@#$%^&*()-_=+,.<>/?]{6,}$/g).test(password)) {
      Alert.alert(errMsgTitle, 'Check that you entered a valid password!');
      return;
    }
      setIsLoading(true);

      let login_data = {};
      
      login_data['email'] = email;
      login_data['password'] = password;
      login_data['ejocrud'] = 'loginuser';

      // console.log(login_data);return;
      login(login_data).then( ( res ) => {
        if ( res.success ) {
          // AsyncStorage.removeItem('loggedin');
          AsyncStorage.setItem('loggedin', 'true');
          props.verified_user(res.id);
        } 
        Toast.showWithGravity(res.msg, Toast.LONG, Toast.TOP);
        setIsLoading(false);
      });


      // setTimeout(()=>{}, 2000)
return;
      
    
  }

 if ( isLoading ) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
           

  return (
    <View style={styles.container}>
            <View>
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={email}
                onChangeText={(val) => setEmail(val)}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={password}
                onChangeText={(val) => setPassword(val)}
                maxLength={15}
                secureTextEntry={true}
              />
              <Button
                color="#3740FE"
                title="Signin"
                onPress={() => userLogin()}
              />

              <Text
                style={styles.switcher}
                onPress={() => go_register()}>
                Don't have account? Click here to signup
        </Text>

            </View>
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
  switcher: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
    paddingVertical: 15
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