
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const logger = createLogger({/* timestamp: true, diff:true */});
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export {
    ReduxPromise,
    ReduxThunk,
    devTools,
    logger
};