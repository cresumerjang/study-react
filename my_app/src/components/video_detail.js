import React, { Component } from 'react';

const VideoDetail = ({ video }) => {
    if( !video ){
      return <div>목록에서 비디오를 선택하세요.</div>;
    }

    const url = `https://www.youtube.com/embed/${ video.id.videoId }`;

    return (
        <div>
        <iframe src={ url }/>
        <p><strong>{ video.snippet.title }</strong></p>
        <p>{ video.snippet.description }</p>
        </div>
    );
};

export default VideoDetail;
