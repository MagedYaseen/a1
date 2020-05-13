import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Hyperlink from 'react-native-hyperlink'


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
      .then(response => response.json())
      .then(responseJSON => console.log(responseJSON))
      .catch(e => console.error(e));
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container} >
            <Image
              style={styles.header}
              source={require('../../assets/header.jpg')}
              resizeMode='contain'
            />


            <Text style={styles.content}>
              The Egyptian Journal of Otolaryngology, a publication of The Egyptian ORL Society, is a peer-reviewed online journal with 4 Issues print on demand compilation of issues published. The journal promotes research, clinical practice through education and dissemination of knowledge in the field of OtoRhinoLaryngology in the specialties of Otology, Rhinology, Head and Neck surgery, Audiology and Phoniatrics and the allied interdisciplinary . The Journal encourages to bring together academicians and clinicians to be a part of this initiative by contributing, reviewing and thus promoting scientific works and science. The journal’s full text is available online at http://www.ejo.eg.net. The journal allows free access (Open Access) to its contents and permits authors to self-archive final accepted version of the articles on any OAI-compliant institutional / subject-based repository.
        </Text>

            <Text style={[styles.content, styles.left, styles.title]}>
              Scope of the journal
        </Text>

            <Text style={[styles.content, styles.left]}>
              The journal will cover technical and clinical studies related to health, ethical and social issues in field of Otolaryngology. Articles with clinical interest and implications will be given preference.
        </Text>

            <Text style={[styles.content, styles.left, styles.title]}>
              Current Issue
        </Text>

            <Hyperlink
              linkStyle={{ color: '#2980b9', fontSize: 20 }}
              linkText={'October-December 2019| Vol 35| Issue 4'}
              linkDefault={true}
            >
              <Text style={[styles.content, styles.left, styles.title]}>
              http://www.ejo.eg.net/temp/EgyptJOtolaryngol354339-67871_000107.pdf
          </Text>
            </Hyperlink>

            
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: 0,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  content: {
    paddingHorizontal: 10
  },
  left: {
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 5 
  },
  header: {
    display: 'flex',
    width: '100%',
    marginTop: 0
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30
  },
});