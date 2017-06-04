/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import Board from './src/Board';
import Player from './src/Player'

class BuddyBeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beat: 0,
    }
  }
  componentDidMount() {
    const timer = this.setInterval(this.tick.bind(this), 500)
  }
  tick() {
    this.setState((prevState) => {
      const beat = prevState.beat;
      const nextBeat = beat === 3 ? 0 : prevState.beat + 1;
      return { beat: nextBeat }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Player />
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

reactMixin(BuddyBeats.prototype, TimerMixin)
export default BuddyBeats

AppRegistry.registerComponent('BuddyBeats', () => BuddyBeats);
