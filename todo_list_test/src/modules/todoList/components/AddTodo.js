import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  static defaultProps = {
    placeholder: '할 일을 추가해 주세요.'
  };
  
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <input type='text' ref='input' placeholder={this.props.placeholder}/>
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}