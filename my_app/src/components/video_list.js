import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import VideoItem from './video_list_item';
import _ from 'lodash';
import axios from 'axios';
import { initList } from '../actions/index';

class VideoList extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      isLogin: true
    };
    // const { dispatch, visibleTodos, visibilityFilter } = this.props;
    this.getVideoList(); // 비디오 목록 호출
  }

  /**
   * [getVideoList description]
   * @param {[String]} searchKeyword [검색키워드]
   * _.debounce가 setTimeout, clearTimeout 사용해서 callback 호출
   */
  getVideoList = _.debounce(( searchKeyword = '보기만 해도 힐링되는 하이텐션 사나' ) => {
    const YOUTUBE_API_KEY = 'AIzaSyBeF5pvvqj0ekkeMPXgnJAfmC7bZWhiCOE';
    const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
const that = this;
    axios.get(YOUTUBE_API, {
        params: {
            q: searchKeyword,
            part: 'snippet',
            key: YOUTUBE_API_KEY
        }
    })
    .then((res) => {
      // this.setState({ videos: res.data.items });
      that.props.initList(res.data.items);
    });
  }, 300)

  render() {
    return (
      <ul>
        { this.props.videos
          ?this.props.videos.map((video, index) => {
             return (
               <VideoItem
                 key={ video.etag }
                 video={ video }
                 onVideoSelect={ this.props.onVideoSelect }
               />
             );
           })
          : (<div>asdf</div>)
        }
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({initList: initList}, dispatch);
}
// export default VideoList;
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
