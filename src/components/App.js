import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube.js';
import VideoList from './VideoList';

class App extends React.Component {
state = { videos: [] };

  onTermSubmit = async( term ) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos : response.data.items })
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit = {this.onTermSubmit} />
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}

export default App;