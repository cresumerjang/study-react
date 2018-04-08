import React, { Component, Fragment } from 'react';
import produce from "immer";
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props){
    super();

    this.refDom = {};
    this.state = {
      value: props.value
    };
    // this.setState(produce(draftState => {
    //   draftState.value = props.value
    // }));
  }

  onChange = (e) => {
    // const currentState = this.state;
    // const draftState = draftState => {
    //   draftState.value = !this.state.value
    // };
    // const nextState = produce( currentState, draftState );
    // this.setState( nextState );

    this.setState(produce(draftState => {
      draftState.value = !this.state.value
    } ));
  }

  checkedStyle = {
    color:'red'
  }

  render(){
    return (
      <Fragment>
        <div>
          <input
            type="checkbox"
            id={this.props.formId}
            name={this.props.name}
            checked={this.state.value}
            value={this.state.value}
            title={this.props.title}
            onChange={this.onChange}
            ref={(el) => this.refDom.input = el}
          />

          <label htmlFor={this.props.formId}>
            <span>{this.props.label}</span>
            {
              this.state.value
              ? <span style={this.checkedStyle}>[선택]</span>
              : <span>[해제]</span>
            }
          </label>
        </div>
      </Fragment>
    )
  }
}

Checkbox.defaultProps = {
  title: '체크박스 입니다.'
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
}

export default Checkbox;
