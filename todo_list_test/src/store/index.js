import { createStore } from 'redux';
import combinedReducer from '../modules/todoList/reducer/index';

const configureStore = () => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(combinedReducer, devTools);

  return store;
}

export default configureStore();