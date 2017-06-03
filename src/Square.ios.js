import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

export default class Square extends React.Component {
  render() {
    const { row, column } = this.props.accessor
    return (
      <TouchableHighlight
        style={this.props.pressed ? {backgroundColor: 'black'} : {backgroundColor: 'pink'}}
        onPress={() =>this.props.handleSquareClick(row, column)}
      >
        <View style={style.square}>
        </View>
      </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
  }
})