import { combineReducers } from 'redux';
import todo from '../modules/todoList/reducer';

const rootReducer = combineReducers({
  todo
});

export default rootReducer;