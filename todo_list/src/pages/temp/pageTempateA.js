import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import TodosContainer from '../../modules/todoList/containers';

class PageTemplateA extends Component {
    render(){
        return (
            <Provider store={store}>
                <TodosContainer/>
            </Provider>
        );
    }
}

export default PageTemplateA;