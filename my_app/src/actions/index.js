export const VideoReducer = {
  INIT_LIST: 'INIT_LIST',
  PLAY_VIDEO: 'PLAY_VIDEO'
};

export function initList( newAction ) {
  return {
    type: VideoReducer.INIT_LIST,
    payload: newAction
  };
}

export function playVideo( newAction ) {
  return {
    type: VideoReducer.PLAY_VIDEO,
    payload: newAction
  };
}
