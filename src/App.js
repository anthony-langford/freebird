import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {
  cyan500, cyan700, deepPurple500, deepPurple50, deepPurple100, deepPurple900,
  pinkA200, lightGreenA400,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, fullWhite,
} from 'material-ui/styles/colors';

import VideoEmbed from './VideoEmbed.js';
import HostVoteList from './HostVoteList.js';
import Splash from './splash.js';
import Loading from './Loading.js';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Skip from 'material-ui/svg-icons/av/skip-next';
import Snackbar from 'material-ui/Snackbar';


const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: deepPurple500,
    primary2Color: pinkA200,
    primary3Color: lightGreenA400,
    accent1Color: deepPurple900,
    accent2Color: deepPurple500,
    accent3Color: deepPurple500,
    textColor: fullWhite,
    alternateTextColor: deepPurple900,
    canvasColor: '#303030',
    borderColor: deepPurple900,
    disabledColor: deepPurple100,
    pickerHeaderColor: deepPurple500,
    clockCircleColor: fade(deepPurple500, 0.07),
    shadowColor: deepPurple500,
  },
});

const styles = {
  newWinner: {
    position: 'absolute'
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      votes: null,
      view: 'splash',
      upNext: [{ songId: 'JFDj3shXvco' }],
      winner: '',
      winnerName: '',
      displayVotes: [],
      open: false,
    };


    this.renderView = () => {
      switch(this.state.view) {
        case 'splash':
          return <Splash switcher={this.switcher} />
        case 'loading':
              return (
                <div>
                <Loading switcher={this.switcher} upNext={this.state.upNext} />
                <p><a>{this.state.userCount} users up in hurr</a></p>
                </div>
                )
        case 'main':
          return (
            <div>
              <p><a style={styles.newWinner}>{this.state.winnerName}</a></p>
                <Snackbar
                  open={this.state.open}
                  message={this.state.userCount + " users connected"}
                  autoHideDuration={3000}
                  onRequestClose={this.handleRequestClose}
                />
              <VideoEmbed winner={this.setWinner} playList={this.state.playList} upNext={this.state.upNext} getUpNext={this.getUpNext} votes={this.state.votes} startParty={this.startParty} />
              <HostVoteList votes={this.state.votes} upNext={this.state.upNext} winner={this.state.winner} />
            </div>
          )
        default:
          break;
      }
    };
  };

  switcher = (newView) => {
    this.setState({ view: newView });
  };


  handleRequestClose = () => {
    this.setState({
      open: false,
      message: ''
    });
  };

  componentDidMount() {
    console.log('componentDidMount <App />');
    console.log('Opening socket connection');

    this.props.ws.on('updateUserCount', (data) => {
      console.log('Received a message from the server!', data);
      this.setState({ userCount: data.userCount, open: true });
    });
    this.props.ws.on('updateUpNext', (upNext) => {
      console.log('updateUpNext', upNext);
      this.setState({ upNext: upNext.data });
      this.setState({ votes: null });
      console.log('upNext', this.state.upNext);
    });
    this.props.ws.on('votes', (data) => {
      console.log('votes', data);
      let displayVotes = data.votes;
      let oldUpNext = this.state.upNext;
      let p = [];
      if (p.length > 2) {
        for (let item in displayVotes) {
          p.push(displayVotes[item]);
        }
        for (let i = 0; i <= 2; i++) {
          oldUpNext[i].votes = p[i].length;
        }
      }
      this.setState({ votes: data.votes, upNext: oldUpNext });
      console.log(this.state.upNext);
    });
    this.props.ws.on('updatePlaylist', (playlist) => {
      console.log('updateplaylist', playlist.data);
    });
    this.props.ws.on('sendName', (data) => {
      console.log('name', data.name);
    });
  };

  componentWillUnmount() {
    console.log('Closing socket connection');
    this.props.ws.close();
  };

  getUpNext = () => {
    this.props.ws.emit('getUpNext');
  };

  setWinner = (newWinner) => {
    if (!newWinner) {
      this.setState({ winnerName : "" });
      return
    }
    this.setState({ winner: newWinner });
    let upNext =  this.state.upNext;
    upNext.forEach((song) => {
      if (song.songId === newWinner) {
        this.setState({ winnerName : song.songTitle });
      };
    });
    this.props.ws.emit('newWinner', { songId: this.state.winner });
  };

  startParty = () => {
    console.log('party\'s just getting started');
    this.props.ws.emit('startParty');
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div >
          { this.renderView() }
        </div>
      </MuiThemeProvider>
    )
  };
};

export default App;
