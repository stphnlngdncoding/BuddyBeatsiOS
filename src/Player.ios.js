import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import {
  Player
} from 'react-native-audio-toolkit';


export default class SoundPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  _onPress() {
    console.log('player mounting');
    const player = new Player('kick-classic.wav');    
    player.play();
  }
  render() {
    return (
      <TouchableHighlight
        onPress={() => this._onPress()}><Text>test</Text>
      </TouchableHighlight>
    )
  }
}