import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideoList from '../actions/videoList.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStateToProps = state => {
  return {video: state.currentVideo};
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: video => dispatch(changeVideoList(video))
  };
};

const VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

export default VideoPlayerContainer;
