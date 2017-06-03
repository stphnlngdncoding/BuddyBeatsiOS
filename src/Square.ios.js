import React from 'react';
import {View, Text, TouchableHighlight } from 'react-native'

export default class Square extends React.Component {
    render() {
        console.log('this.props', this.props);
        return (
             <TouchableHighlight onPress={this.props.handleSquareClick}>
                <View style={this.props.pressed ? {backgroundColor: 'black'} : {}}>
                    <Text>testing touch</Text>
                </View>
            </TouchableHighlight>
        )
    }
}