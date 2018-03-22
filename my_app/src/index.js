// Package Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
// import youtube_api from 'youtube-api-search';

// UI Components
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';
// https://console.developers.google.com
// https://developers.google.com/youtube/v3/docs/search/list?hl=ko#--
const YOUTUBE_API_KEY = 'AIzaSyBeF5pvvqj0ekkeMPXgnJAfmC7bZWhiCOE';
const App = () => {
    return (
        <div>
            <SearchBar/>
            <VideoDetail/>
            <VideoList/>
        </div>
    )
};
// axios
// .get('https://www.googleapis.com/youtube/v3/search', {
//     params: {
//         q: q,
//         part: snippet,
//         key: AIzaSyBeF5pvvqj0ekkeMPXgnJAfmC7bZWhiCOE
//     }
// })
// .then((response) => {
//     console.log(response);
//   })
//   .catch(() => {
//
//   })

ReactDOM.render(<App />, document.querySelector('#root'));
// registerServiceWorker();
