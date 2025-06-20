import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Lists extends Component {

    state = {
        names: [
            { id: 0, name: 'Ben'}, 
            { id: 1, name: 'Susan'}, 
            { id: 2, name: 'Roberth'},  
            { id: 3, name: 'Chrischarles'}
        ]
    }
    alterItemName = () => {
        alert(item.name);
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Lista de itens "clicáveis"
                </Text>
            </View>
        );
    }
}

export default List;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c',
    }
});