import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { playVideo } from '../actions/index';
import $ from 'jquery';

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

    this.refDom = {};
  }

  makeVideoUrl = ( video ) => {
    return `https://www.youtube.com/embed/${ video.id.videoId }`;
  }

  selectVideo = (  ) => {
      this.props.playVideo(this.state.video);
      window.scrollTo(0,0);
  }

  update = (e) => {
    console.log(this.item);
    $(this.refDom.item).find('.description').slideUp();
  }
  show = () => {
    $(this.refDom.item).find('.description').slideDown();
  }
  render() {
    return (
      <li ref={el => this.refDom.item = el}>
        {/*<img onClick={() => this.state.onVideoSelect(this.state.video)} src={ this.state.thumbnail } alt=""/>*/}
        <img onClick={this.selectVideo} src={ this.state.thumbnail } alt=""/>
        <strong onClick={this.show}>{ this.state.title }</strong>
        <p className="description" onClick={this.update}>{ this.state.description }</p>
      </li>
    );
  }
}

// export default VideoItem;
function mapDispatchToProps(dispatch) {
  return bindActionCreators({playVideo: playVideo}, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoItem);
