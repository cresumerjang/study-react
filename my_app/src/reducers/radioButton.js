import {SELECT_RADIO} from '../actions/index';

const RadioButton = ( state = null, action ) => {
  switch( action.type ) {
    case 'SELECT_RADIO' :
    console.log('#######3', action.payload);
      return !action.payload;
    default :
      return state;
  }
};

export default RadioButton;
