import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'

class ScrollViewExample extends Component {
    state = {
        names: [
            { 'name': 'Tenko', 'id': 1},
            { 'name': 'Korekiyo', 'id': 2},
            { 'name': 'Angie', 'id': 3},
            { 'name': 'Himiko', 'id': 4},
            { 'name': 'Gonta', 'id': 5},
            { 'name': 'Miu', 'id': 6},
            { 'name': 'Shuichi', 'id': 7},
            { 'name': 'Kaede', 'id': 8},
            { 'name': 'Rantaro', 'id': 9},
            { 'name': 'Ryoma', 'id': 10},
            { 'name': 'Kirumi', 'id': 11},
            { 'name': 'Kaito', 'id': 12},
            { 'name': 'Kokichi', 'id': 13},
            { 'name': 'Tsumugi', 'id': 14},
            { 'name': 'Maki', 'id': 15},
            { 'name': 'Keebo', 'id': 16},
        ]
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View
                                key={item.id}
                                style={styles.item}
                            >
                            <Image source={require('../assets/favicon.png')}/>
                            <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default ScrollViewExample

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1',
    }
})