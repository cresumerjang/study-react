// import ActionContainer from '../actions/index';

const VideoReducer = ( state = null, action ) => {
  console.log('REDUCER===>',action)
  switch( action.type ) {
    case 'INIT_LIST' :
    if( action.payload.data && action.payload.data.items ){
      return action.payload;
    } else {
      return [];
    }

    default :
      return state;
  }
};

export default VideoReducer;
