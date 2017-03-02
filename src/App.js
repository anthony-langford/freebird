import React, { Component } from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VideoEmbed from './VideoEmbed.js';
import HostVoteList from './HostVoteList.js';
import Splash from './splash.js';
import Loading from './Loading.js';

const config = require('../config');

const muiTheme = getMuiTheme({
  palette: { accent1Color: deepOrange500 }
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      votes: null,
      view: 'splash',
      upNext: []
    };

    this.renderView = () => {
      switch(this.state.view) {
        case 'splash':
          return <Splash switcher={this.switcher}/>
        case 'loading':
          return <Loading switcher={this.switcher} upNext={this.state.upNext}/>
        case 'main':
          return (
            <div>
              <VideoEmbed playList={this.state.playList} upNext={this.state.upNext} getUpNext={this.getUpNext} votes={this.state.votes} />
              <HostVoteList votes={this.state.votes} upNext={this.state.upNext} />
              {this.state.userCount} user(s) in room
            </div>
          )
        default:
          break;
      }
    };
  };

  switcher = (newView) => {
    this.setState({ view: newView });
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    console.log('Opening socket connection');

    this.props.ws.on('updateUserCount', (data) => {
      console.log('Received a message from the server!', data);
      this.setState({ userCount: data.userCount });
    });
    this.props.ws.on('votes', (data) => {
      console.log('votes', data);
      this.setState({ votes: data.votes });
    });
    this.props.ws.on('updateUpNext', (upNext) => {
      console.log('updateUpNext', upNext);
      this.setState({ upNext: upNext.data });
      console.log('upNext', this.state.upNext);
    });
    this.props.ws.on('updatePlaylist', (playlist) => {
      console.log('updateplaylist', playlist.data);
    });
  };

  componentWillUnmount() {
    console.log('Closing socket connection');
    this.props.ws.close();
  };

  getUpNext = () => {
    this.props.ws.emit('getUpNext');
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          { this.renderView() }
        </div>
      </MuiThemeProvider>
    )
  };
};

export default App;
