import React from 'react';
import ReactDOM from 'react-dom';
import PageTemplateA from './pages/temp/pageTempateA';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import combinedReducer from './store/reducerCombinder';

const store = createStore(combinedReducer);

ReactDOM.render(<Provider store={store}><PageTemplateA /></Provider>, document.getElementById('root'));
