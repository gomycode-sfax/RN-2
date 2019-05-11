import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Note extends React.Component {

    render() {
        return (
            <View key={this.props.key} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.note} </Text>
                <Text style={styles.noteText}>{this.props.val.date} </Text>
                <TouchableOpacity onPress={() => this.props.deleteMethod(this.props.key)} style={styles.notebutton}>
                    <Text style={styles.deleteButton}>DELETE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',

    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',

    },
    notebutton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    deleteButton: {
        color: "white",
    }

})