import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import Note from './Note';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',

        }
    }

    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} val={val}
                deleteMethod={(key) => this.deleteNote(key)} />
        });

        return (
            <View style={styles.container}>
                <View styles={styles.heading} >
                    <Text style={styles.title}>Add your Tasks</Text>
                </View>
                <View >
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='type here'
                        placeholderTextColor='white'
                        onChangeText={(noteText) => this.setState({ noteText: noteText })}
                        value={this.state.noteText}
                    />
                   
                    <Button title="ADD" onPress={() => this.addNote()} />
                </View>
                <ScrollView>
                    <View style={styles.main}>
                        {notes}
                       
                    </View>
                </ScrollView>

            </View>
        )

    }
    addNote = () => {
        if (this.state.noteText) {
           
            let d = new Date();
         
            this.setState({
                noteArray: [...this.state.noteArray, {
                    'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDay() +  '--' + d.getHours() + ':' + d.getMinutes(),
                    'note': this.state.noteText,
                }], noteText: ''
            })
            this.setState({ noteText: '' })

        }
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1)
        this.setState({ noteArray: this.state.noteArray })
    }
}
const styles = StyleSheet.create({
   
    heading: {
        backgroundColor: "#70C7E8",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 10,
        borderBottomColor: "#ddd"
    },
    title: {
        color: "black",
        fontSize: 18,
        padding: 26,
        backgroundColor: "white"
    },
    main: {
        flex: 1,
        marginBottom: 100
    },
    button: {
        position: "absolute",
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: "#e91e63",
        width: 90,
        height: 90,
        borderRadius: 59,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
    },
    input: {
        alignSelf: "stretch",
        color: "#fff",
        padding: 10,
        backgroundColor: "#252525",
        borderTopWidth: 2,
        borderTopColor: "#ededed",
        margin: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 24
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        alignItems: 'stretch',
    }

});


