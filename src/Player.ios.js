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
  enableDrum(drum, i, drumPath) {
    console.log('this.props.board[i][this.props.beat]', this.props.board[i][this.props.beat])
    console.log('this.props.board', this.props.board);
    console.log('drum', drum)
    if (this.props.board[i][this.props.beat]) {
      this.state[drum].play()
      this.setState({ [drum] : null}, () => {
        this.setState({ [drum]: new Player(drumPath)})
      })
    }
  }
  componentWillReceiveProps() {
    // console.log('this.props.beat', this.props.board[0][this.props.beat])
    // if (this.props.board[0][this.props.beat] === 1) {
    //   console.log('triggered')
    //   this.state.drum1.play();
    //   this.setState({ drum1: null }, () => {
    //     this.setState({ drum1: new Player('kick-classic.wav')})
    //   })
    // }
    this.enableDrum('drum1', 0, 'kick-classic.wav')
    this.enableDrum('drum2', 1, 'snare-punch.wav')
    this.enableDrum('drum3', 2, 'hihat-reso.wav')
    this.enableDrum('drum4', 3, 'perc-hollow.wav')
  }
  render() {
    return null;
  }
}