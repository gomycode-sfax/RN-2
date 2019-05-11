import React from 'react';
import { Text, View, Button } from 'react-native';
import { BackButton, NativeRouter, } from "react-router-native";



export default class App extends React.Component {

  render() {
    return (
      <View>
        <Button title='Back' onPress={() => this.props.history.push('/')} />

        <BackButton />
        <Text>About this App</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum
             facere placeat sequi officia est debitis reiciendis eligendi sit odit ven
             iam consectetur voluptatum, pariatur excepturi, hic exercitationem fugiat! Modi, sunt.
          </Text>
      </View>
    );
  }
}