// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
// middleware
import { logger, composeEnhancers, ReduxPromise, ReduxThunk } from '../middlewares';
// module's reducer
import todosFilter from '../modules/todoList/actionAndReducers/filter';
import todos from '../modules/todoList/actionAndReducers/todos';
import filterList from '../modules/filter/actionAndReducers/filter';

const initialState = {
  // filterList:'테스트'
};

const combinedReducers = combineReducers({
  todosFilter,
  todos,
  filterList
});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk, ReduxPromise)(createStore);
const store = createStore(combinedReducers, initialState, composeEnhancers(applyMiddleware(logger, ReduxThunk, ReduxPromise)));

export default store;