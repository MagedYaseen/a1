import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
// import firebase from '../../database/firebase';

// import axios from 'react-native-axios';
import {registerUser} from '../../api/api';

export default ScreenSignup = ( props ) =>  {
  
  const [displayName, setDisplayName] = useState("mail@default.com");
  const [email, setEmail] = useState("mail@default.com");
  const [password, setPassword] = useState("password");
  const [repeat, setRepeat] = useState("repeat");


  go_login = () => {
    props.login_reg();
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  register_user = () => {
    const state = this.state;

    const values = Object.values(state);

    const title = 'Invalid Registration Data';

    //Validate all fields
    if (values.includes('')) {
      Alert.alert(title, 'All Fields are required!');
      return;
    }
    
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(state.email)) {
      Alert.alert(title, 'Email is not valid!!!!');
      return;
    }
    
    if (!(/[a-zA-Z0-9`~!@#$%^&*()-_=+,.<>/?]{6,}$/g).test(state.password)) {
      Alert.alert(title, 'Password should contain Capital and Small Letters, Numbers, and Special Characters');
      return;
    }
    
    // if (state.password !== state.repeat) {
    //   Alert.alert(title, 'Password do not match!');
    //   return;
    // }
    
      let reg_data = state;

      delete reg_data.repeat;
      delete reg_data.isLoading;

      reg_data['ejocrud'] = 'regnewuser';
      registerUser(reg_data);

      return;
    
    //axios registration



   

    

    return;
    
     if(true){
       
     }else {
      this.setState({
        isLoading: true,
      });
      console.log('User will register!');
      console.log(firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password));
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

    // if ( this.state.isLoading ) {
    //   return (
    //     <View style={styles.preloader}>
    //       <ActivityIndicator size="large" color="#9E9E9E"/>
    //     </View>
    //   )
    // }    
    return (
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={displayName}
          onChangeText={(val) => updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={email}
          onChangeText={(val) => updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          onChangeText={(val) => updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <TextInput
          style={styles.inputStyle}
          placeholder="Repeat Password"
          value={repeat}
          onChangeText={(val) => updateInputVal(val, 'repeat')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => register_user()}
        />

        <Text 
          style={styles.switcher}
          onPress={() => go_login()}>
          Already registered? Click here to login
        </Text>                          
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
    paddingVertical: 15,
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
  }
});