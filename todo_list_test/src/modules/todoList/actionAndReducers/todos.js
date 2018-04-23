import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// action
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';


// export function addTodo(text) {
//     return { type: ADD_TODO, text };
// }

// export function completeTodo(index) {
//     return { type: COMPLETE_TODO, index };
// }
// export function setVisibilityFilter(filter) {
//     return { type: SET_VISIBILITY_FILTER, filter };
// }
// createAction 바로 text => text 처럼 사용시 {type:ADD_TODO, payload: text} 이렇게 바로 담겨감
// 아래처럼 직접 return할 경우 payload의 값으로 리턴 객체 들어감
// {
//   type:"ADD_TODO"
//   payload:{text: "new todo"}
// }
export const addTodo = createAction(ADD_TODO, text => {
    return { text } 
});
export const completeTodo = createAction(COMPLETE_TODO, index => {
    return { index }
});


// reducer
// export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
//     switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.payload.filter;
//     default:
//       return state;
//     }
//   }
const defaultState = [
    {text: '입력된 할 일', completed: true}
];

export default handleActions({
  [ADD_TODO]: (state, action) => {
    return [...state, { 
      text: action.payload.text,
      completed: false
    }];
  },
  [COMPLETE_TODO]: (state, action) => {
    return [
      ...state.slice(0, action.payload.index),
      Object.assign({}, state[action.payload.index], {
        completed: true
      }),
      ...state.slice(action.payload.index + 1)
    ];
  }
}, defaultState);
  // export function todos(state = [], action) {
  //   switch (action.type) {
  //   case ADD_TODO:
  //     return [...state, { 
  //       text: action.payload.text,
  //       completed: false
  //     }];
  //   case COMPLETE_TODO: 
  //     return [
  //       ...state.slice(0, action.payload.index),
  //       Object.assign({}, state[action.payload.index], {
  //         completed: true
  //       }),
  //       ...state.slice(action.payload.index + 1)
  //     ];
  //   default:
  //     return state;
  //   }
  // }