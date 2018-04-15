import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import Todos from '../components/TodoItems';
import { connect } from 'react-redux';
// import * as TodoActions from '../action';

class TodosContainer extends Component {
  handleChange = (e) => { 
    // 인풋 값 변경
    // this.props.TodoChangeInput(e.target.value);
  }

  handleInsert = () => {
    // 아이템 추가
    const { input } = this.props;
    // this.props.TodoInsert(input); // 추가하고
    // this.props.TodoChangeInput(''); // 기존 인풋값 비우기
  }

  handleToggle = (id) => {
    // 삭제선 켜고 끄기
    // this.props.TodoToggle(id);
  }

  handleRemove = (id) => {
    // 아이템 제거
    // this.props.TodoRemove(id);
  }

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <div>asdfasf ####</div>
    );
  }
}
// <Todos
//         input={input}
//         todos={todos}
//         onChange={handleChange}
//         onInsert={handleInsert}
//         onToggle={handleToggle}
//         onRemove={handleRemove}
//       />

function mapStateToProps(state) {
  return {
    input: state.todo.input,
    todos: state.todo.todos
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     TodoChangeInput: TodoActions.changeInput,
//     TodoInsert: TodoActions.insert,
//     TodoToggle: TodoActions.toggle,
//     TodoRemove: TodoActions.remove
//   }, dispatch);
// }

export default connect(mapStateToProps, null)(TodosContainer);