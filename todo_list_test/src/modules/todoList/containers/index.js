import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actionAndReducer';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    // connect() 호출을 통해 주입됨:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            // dispatch(addTodo(text))
            this.props.addTodo(text)
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            // dispatch(completeTodo(index))
            this.props.completeTodo(index)
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            // dispatch(setVisibilityFilter(nextFilter))
            this.props.setVisibilityFilter(nextFilter)
          } />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

// 주어진 전역 상태에서 어떤 props를 주입하기를 원하나요?
// 노트: 더 나은 성능을 위해서는 https://github.com/faassen/reselect 를 사용하세요
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

const matDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo : addTodo,
    completeTodo : completeTodo,
    setVisibilityFilter : setVisibilityFilter
  }, dispatch);
}

// 디스패치와 상태를 주입하려는 컴포넌트를 감싸줍니다.
export default connect(select, matDispatchToProps)(App);