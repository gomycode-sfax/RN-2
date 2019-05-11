import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableHighlight } from 'react-native';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.welcome}>
                <Image style={{ height: 300, width: 300 }} source={{ uri: 'https://i.imgur.com/EzAQKcy.png' }} />
                <Button style={styles.btn} title="Get Started" onPress={() => this.props.history.push('/Login')} />

            
                <Button style={styles.btn} title="About" onPress={() => this.props.history.push('/About')} />

            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    welcome: {
        paddingTop: 30,
       alignItems: "center",
       margin: 20
    }
})