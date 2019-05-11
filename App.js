import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native'
import Main from './Components/Main'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/Signup'
import About from './Components/About'
import Note from './Components/Note'
import * as firebase from 'firebase'; 

// const firebaseConfig = {
//   apiKey: "AIzaSyCSoAL0AitSJ-xNSVV_tDeQLBV7kJbNWWM",
//   authDomain: "projet-demo-86a69.firebaseapp.com",
//   databaseURL: "https://projet-demo-86a69.firebaseio.com",
//   projectId: "projet-demo-86a69",
//   storageBucket: "projet-demo-86a69.appspot.com",
//   messagingSenderId: "270011034874",
//   appId: "1:270011034874:web:1c7bae41d25a535a"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     
      <NativeRouter>
        <View >
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/About" component={About} />
          </Switch>
        </View>
      </NativeRouter>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
