import React , { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class ScreenHome extends Component {
    constructor() {
      super();
      this.state = {
        v1: "xxx"
      };
    }
  
    // fetchFromAPI = () => {
    //    fetch("http://192.168.1.5:19001/voom_mobapp/api/processapi", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     // body :"name=Maged M. Yaseen&vomcrud=test"
    //     body: JSON.stringify({
    //       'name': "Maged M. Yaseen",
    //       'vomcrud': "test"
    //     })
    //   } )
    //     .then(response => {
    //       console.log(response.json());
    //       // response.json();
    //     })
    //     .then(response => {
    //       console.log(response);
    //       // console.log("responsejson: " + response);
    //     })
    //     .catch(e => {
    //       console.error(e);
    //     });
    // };
    
  //   fetchApiJsonPlaceholder = () => {
  //     // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     fetch('http://voomapp.magedyaseen.net/processapi.php')
  // .then(response => response.json())
  // .then(json => console.log(json))
  //   }


     fetchFromAPI = async () => {
      const url = "http://voomapp.magedyaseen.net/processapi.php";
      // const url = "http://192.168.1.6/voomapp/processapi.php";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: "Maged M. Yaseen",
          vomcrud: "toprates"
        })
      };

       await fetch(url, options)
       .then( response => response.json())
       .then( responseJSON => console.log(responseJSON))
       .catch(e => console.error(e));
   };
    render() {
      const navigation = this.props.navigation;
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text>Home!</Text>
          <Text>{this.state.v1}</Text>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
          />
          <Button
            title="Go to Center"
            onPress={() => navigation.navigate("Center")}
          />
          <Button title="Fetch" onPress={() => this.fetchFromAPI()} />
        </View>
      );
    }
  }