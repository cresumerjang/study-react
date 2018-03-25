export const VideoReducer = {
  INIT_LIST: 'INIT_LIST'
};

export function initList( newAction ) {
  return {
    type: VideoReducer.INIT_LIST,
    payload: newAction
  };
}
