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
    this.state = {
      drum1: new Player('kick-classic.wav'),
      drum2: new Player('snare-punch.wav'),
      drum3: new Player('hihat-reso.wav'),
      drum4: new Player('perc-hollow.wav'),
    }
  }

  /*_onPress() {
    console.log('player mounting');
    const player = new Player('kick-classic.wav');    
    player.play();
  }
  render() {
    return (
      <TouchableHighlight
        onPress={() => this._onPress()}><Text>test</Text>
      </TouchableHighlight>
    )*/
  componentDidUpdate() {
    console.log('this.props.beat', this.props.beat)
  }
  render() {
    return null;
  }
}