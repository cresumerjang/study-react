import React, { Component } from 'react';
// import _ from 'lodash';
// import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playVideo } from '../actions/index';

class VideoItem extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      video: props.video,
      id: props.video.etag,
      videoId: props.video.id.videoId,
      url: this.makeVideoUrl( props.video ),
      title: props.video.snippet.title,
      description: props.video.snippet.description,
      thumbnail: props.video.snippet.thumbnails.high.url,
      onVideoSelect: props.onVideoSelect
    }
  }

  makeVideoUrl = ( video ) => {
    return `https://www.youtube.com/embed/${ video.id.videoId }`;
  }

  selectVideo = (  ) => {
      this.props.playVideo(this.state.video);
  }

  render() {
    return (
      <li>
        {/*<img onClick={() => this.state.onVideoSelect(this.state.video)} src={ this.state.thumbnail } alt=""/>*/}
        <img onClick={this.selectVideo} src={ this.state.thumbnail } alt=""/>
        <strong>{ this.state.title }</strong>
        <p>{ this.state.description }</p>
      </li>
    );
  }
}

// export default VideoItem;
function mapDispatchToProps(dispatch) {
  return bindActionCreators({playVideo: playVideo}, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoItem);
