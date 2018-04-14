import axios from 'axios';

export const VideoReducer = {
  INIT_LIST: 'INIT_LIST',
  PLAY_VIDEO: 'PLAY_VIDEO'
};

export function initList( newAction ) {
  const YOUTUBE_API_KEY = 'AIzaSyBeF5pvvqj0ekkeMPXgnJAfmC7bZWhiCOE';
  const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
  const request = axios.get(YOUTUBE_API, {
      params: {
          q: newAction.q,
          part: newAction.part,
          key: YOUTUBE_API_KEY
      }
  });
console.log('ACTION ===>', request)
  return {
    type: VideoReducer.INIT_LIST,
    payload: request
  };
}

export function playVideo( newAction ) {
  return {
    type: VideoReducer.PLAY_VIDEO,
    payload: newAction
  };
}

export const SELECT_RADIO = 'SELECT_RADIO';

export function radioButton( newAction ) {
  return {
    type: SELECT_RADIO,
    payload: newAction
  }
}
