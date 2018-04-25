import { compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const logger = createLogger({/* timestamp: true, diff:true */});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export {
    ReduxPromise,
    ReduxThunk,
    composeEnhancers,
    logger
};