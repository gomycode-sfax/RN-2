import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {  BackButton } from 'react-router-native';


export default class Note extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            signUpEmail:' ',
            signUpPw:' ',

        }
    }

    render(){
        return(
            <View>
                <BackButton/>
                <Text>New Account</Text>

                <Text>Email</Text>
                <TextInput
                        underlineColorAndroid='transparent'
                        placeholder=' '
                        placeholderTextColor='white'
                        onChangeText={(signUpEmail) => this.setState({ signUpEmail: signUpEmail })}
                        value={this.state.signUpEmail}
                    />
                <Text>Password</Text>
                <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='type here'
                        placeholderTextColor='white'
                        onChangeText={(signUpPw) => this.setState({ signUpPw: signUpPw })}
                        value={this.state.signUpPw}
                    />
                <Button title="Sign Up" onPress={() => 1} />
                
            </View>
        )
    }
}