// import ActionContainer from '../actions/index';

const VideoReducer = ( state = null, action ) => {
  switch( action.type ) {
    case 'INIT_LIST' :
      return action.payload;
    default :
      return state;
  }
};

export default VideoReducer;
