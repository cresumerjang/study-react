// import ActionContainer from '../actions/index';

const VideoReducer = ( state = null, action ) => {
  switch( action.type ) {
    case 'PLAY_VIDEO' :
      return action.payload;
    default :
      return state;
  }
};

export default VideoReducer;
