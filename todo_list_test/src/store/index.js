import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import todosFilter from '../modules/todoList/actionAndReducer/filter';
import todos from '../modules/todoList/actionAndReducer/todos';

const logger = createLogger({/* timestamp: true, diff:true */});
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk, ReduxPromise)(createStore);
const store = createStoreWithMiddleware(combineReducers({
  todosFilter,
  todos
}), devTools);

export default store;