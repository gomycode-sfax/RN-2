import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { NativeRouter, BackButton } from 'react-router-native';
import Header from './Header'

export default class Note extends React.Component{
    

    render(){
        return(
                <View>
                    
                    <Header/>
                </View>
        )
    }
}