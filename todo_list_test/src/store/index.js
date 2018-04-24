// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
// middleware
import { logger, devTools, ReduxPromise, ReduxThunk } from '../middlewares';
// module's reducer
import todosFilter from '../modules/todoList/actionAndReducers/filter';
import todos from '../modules/todoList/actionAndReducers/todos';
import filterList from '../modules/filter/actionAndReducers/filter';

const initialState = {}; // filterList:'ASFA' 

const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(combineReducers({
  todosFilter,
  todos,
  filterList
}), initialState, devTools);

export default store;