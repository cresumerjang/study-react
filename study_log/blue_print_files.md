# Basic Templates For React
- __NOTE__
    - 외부 라이브러리 사용을 위한 ref
    - 비동기처리
    - router는 고려되지 않았음
    - jquery를 사용하지 않은 애니메이션 고려
    - handleAction 으로 리듀서 사용하는법 확인
    - immer 사용법
    - portal 사용법
    - life cycle 메소드
    - propTypes
    - 비동기 처리 상태 필수 구현 rule setup
    - thunk, promise 처리 로직 확인

## Directory Structure

- __index.js__ : import page and bind store with Provider
- __store/__
    - index.js : setup and apply middleware, combine reducer, create store here 
- __pages/__
    - pageA.js : import modules/*
- __modules/__
    - __dealCard/__
        - __containers/__
            - index.js : import components/* and actionAndReducer/*
        - __components/__
            - Description.js
            - AddCart.js
            - RelationItem.js
        - __actionAndReducers/__
            - addCart.js
            - relationItem.js

## Entry Component
```js
// core modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Root Component
import App from './modules/todoList/containers';
// Store
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
## Store
```js
// core modules
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// middlewares
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
// reducers
import todosFilter from '../modules/todoList/actionAndReducers/filter';
import todos from '../modules/todoList/actionAndReducers/todos';

// middleware setup and apply
const logger = createLogger({/* timestamp: true, diff:true */});
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const createStoreWithMiddleware = applyMiddleware(logger, ReduxThunk, ReduxPromise)(createStore);

// combine reducer and create store
const store = createStoreWithMiddleware(combineReducers({
  todosFilter,
  todos
}), devTools);

export default store;
```
## Action & Reducer
> 액션과 리듀서를 하나의 파일에서 관리하거나 분리하여 관리하는 방법
굳이 두벌로 나눌 이유가 없고 작업하기 한벌이 편리하여 Action & Reducer로 구성
```js
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// action
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE' 
  }; 

// action creator
// createAction 사용시 아래 경우 {type:SET_VISIBILITY_FILTER, payload: filter} 로 return 됨
export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, filter => {
    return { filter }
});

// reducer
export default handleActions({
    [SET_VISIBILITY_FILTER]: (state, action) => {
        return action.payload.filter;
    //   return produce(state, draft => {
        
    //   });
    }
}, VisibilityFilters.SHOW_ALL);
```
## Action 
> Action, Reducer 분리한 케이스
```js
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
```

## Reducer
> Action, Reducer 분리한 케이스
```js
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../action';
const { SHOW_ALL } = VisibilityFilters;

export visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

export todos = (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
      text: action.text,
      completed: false
    }];
  case COMPLETE_TODO: 
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}
```
## Container Component
```js
// core and util library modules
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';
// action
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../action';

class App extends Component {
    static defaultProps = {
        placeholder: '할 일을 추가해 주세요.',
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    };
  
    static propTypes = {
        onAddClick: PropTypes.func.isRequired,
        visibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })),
        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired,
        todos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired
    };
    
    // initialization 1
    constructor(props){
        super(props);
    }

    // Prop updates 1
    componentWillReceiveProps(nextProps){

    }

    // State updates 1, Prop updates 2
    shouldComponentUpdate(nextProps, nextState){

    }

    // State updates 2, Prop updates 3
    componentWillUpdate(nextProps, nextState){

    }

    // initialization 2
    componentWillMount(){
        
    }

    // initialization 3
    // Prop updates 4
    // State updates 3
    render() {
        // connect() 호출을 통해 주입됨:
        const { dispatch, visibleTodos, visibilityFilter } = this.props;

        return (
            <Fragment>
                
            </Fragment>
        );
    }

    // State updates 4, Prop updates 5
    componentDidUpdate(prevProps, prevState){

    }

    // initialization 4
    componentDidMount(){

    }
}

// 더 나은 성능을 위해 https://github.com/faassen/reselect 사용
// reducer to props
const mapStateToProps = state => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}
// action to props
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTodo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
```
## Presentational Component
```js
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class App extends Component {
    static defaultProps = {
        placeholder: '할 일을 추가해 주세요.',
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    };
  
    static propTypes = {
        onAddClick: PropTypes.func.isRequired,
        visibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })),
        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired,
        todos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired).isRequired
    };

    // initialization 1
    constructor(props){
        super(props);
    }
    // Prop updates 1
    componentWillReceiveProps(nextProps){

    }

    // State updates 1, Prop updates 2
    shouldComponentUpdate(nextProps, nextState){

    }

    // State updates 2, Prop updates 3
    componentWillUpdate(nextProps, nextState){

    }

    // initialization 2
    componentWillMount(){
        
    }

    // initialization 3
    // Prop updates 4
    // State updates 3
    render() {
        return (
            <Fragment>
                
            </Fragment>
        );
    }

    // State updates 4, Prop updates 5
    componentDidUpdate(prevProps, prevState){

    }

    // initialization 4
    componentDidMount(){

    }
}

export default App;
```