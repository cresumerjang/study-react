import React from 'react';
import VideoItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoListItem = videos.map((video, index) => {
        return (
          <VideoItem
            key={ video.etag }
            video={ video }
            onVideoSelect={ onVideoSelect }
          />
        );
    });

    return (
      <ul>
        { videoListItem }
      </ul>
    )
};

export default VideoList;
