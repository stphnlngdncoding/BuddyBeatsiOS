import React, { Component } from 'react';
import { 
  Text,
  View,
  TouchableHighlight,
  StyleSheet,

} from 'react-native';
import Square from './Square';

export default class Board extends Component {
   constructor(props) {
       super(props);
       this.state = {
        board: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            ]
        }
   }
   handleSquareClick(row, column) {
      const deepClone = (arr) => arr.map(row => row.map(x => x));
      const clone = deepClone(this.state.board);
      this.setState((prevState) => {
        const boardClone = deepClone(prevState.board);
        const prevValue = boardClone[row][column]
        boardClone[row][column] = prevValue === 1 ? 0 : 1 
        return { board: boardClone }
      });
   }
    render() {
        return (
          <View style={styles.container}>
            {this.state.board.map((row, i) => {
              return (
                <View style={{height: 100, flexDirection: 'row'}}>
                  {row.map((column, j) => {
                    return (
                      <Square
                        pressed={!!column}
                        accessor={{row: i, column: j}}
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

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'blue',
  },
  row: {
    // justifyItems: 'center',
    height: 100,
    // flexDirection: 'row',
  }
});