import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
// import SearchContainer from '../containers/SearchContainer.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

class App extends React.Component {
  componentDidMount() {
    this.props.handleSearchInputChange('react tutorials');
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.props.handleSearchInputChange.bind(this)}/>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    video: state.currentVideo,
    videos: state.videoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: q => dispatch(handleSearchChange(q)),
    // handleVideoListEntryTitleClick: video => dispatch(changeVideo(video))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);