import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Square from './Square';

export default class Board extends Component {
   constructor(props) {
       super(props);
       this.state = {
        board: [
            [0, 0],
            [1, 0],
            ]
        }
   }
   handleSquareClick(row, column) {
        this.setState({ board: [ [1, 1], [1, 1] ]});
   }
    render() {
        console.log(this.state);
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'blue'}}>
                {this.state.board.map(row => {
                    return (
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            {row.map(column => {
                                return (
                                    <Square
                                        pressed={!!column}
                                        accessor={{row, column}}
                                        handleSquareClick={this.handleSquareClick.bind(this)}
                                    />)
                            })}
                        </View>
                    )
                })}
            </View>
        )
    }
}