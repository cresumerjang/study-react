import { CHANGE_INPUT, INSERT, TOGGLE, REMOVE } from '../action';

// 그냥 일반 객체, 내부에는 일반 배열이 들어갑니다.
const initialState = {
  input: '',
  todos: []
};

// export default function reducer(state = initialState, action = {}){
//   switch( action.type ){
//     case CHANGE_INPUT : 
//       return action.payload;
//     case INSERT : 
//       return action.payload;
//     case TOGGLE : 
//       return action.payload;
//     case REMOVE : 
//       return action.payload;
//     default: 
//       return state;
//   }
// }

const todo = ( state = initialState, action ) => {
  switch( action.type ){
    case CHANGE_INPUT : 
      return action.payload;
    case INSERT : 
      return action.payload;
    case TOGGLE : 
      return action.payload;
    case REMOVE : 
      return action.payload;
    default: 
      return state;
  }
};

export default todo;