// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
// middleware
import { logger, devTools, ReduxPromise, ReduxThunk } from '../middlewares';
// module's reducer
import todosFilter from '../modules/todoList/actionAndReducers/filter';
import todos from '../modules/todoList/actionAndReducers/todos';

const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(combineReducers({
  todosFilter,
  todos
}), devTools);

export default store;