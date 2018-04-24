import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props){
    super(props)

  }
    static defaultProps = {
        todos: [
            {text: '하하', completed: true},
            {text: '하하vasd하', completed: true}
        ]
    };

  componentDidMount(params){
    if(!params){
      return;
    }

  }

  static propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
  };
  
  render() {
    console.log('3333', this.props.todos)
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)} />
        )}
      </ul>
    );
  }
}