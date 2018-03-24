// Package Modules
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
// UI Components
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
// import { SearchBar, VideoDetail, VideoList } from './components/index';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };


    this.isLogin = false;
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

    axios.get(YOUTUBE_API, {
        params: {
            q: searchKeyword,
            part: 'snippet',
            key: YOUTUBE_API_KEY
        }
    })
    .then((res) => {
      this.setState({ videos: res.data.items });
    });
  }, 300)

  /**
   * 비디오 목록에서 비디오 선택시 해당 비디오 객체로 state 변경
   * @param  {[Object]} selectedVideo [선택된 비디오 객체]
   */
  onVideoSelect = ( selectedVideo ) => {
    this.setState({ selectedVideo });
  }
  componentDidMount() {

  }

  componentWillMount() {

  }
  /**
   * 랜더 메소드
   * @return {[Object]} [JSX]
   */
  render() {
    return (
      <Fragment>
      { this.isLogin ?
        (
          <Fragment>
            <VideoDetail video={ this.state.selectedVideo }/>
            <SearchBar searchYoutube={ this.getVideoList }/>
            <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect }/>
          </Fragment>
        )
          : (<div>Empty Content</div>)
        }
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
// registerServiceWorker();
