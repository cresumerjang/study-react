import React, { Component } from 'react';

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

  render() {
    return (
      <li>
        <img onClick={() => this.state.onVideoSelect(this.state.video)} src={ this.state.thumbnail }/>
        <strong>{ this.state.title }</strong>
        <p>{ this.state.description }</p>
      </li>
    );
  }
}

export default VideoItem;
