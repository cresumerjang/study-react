import React, { Component, Fragment } from 'react';
import produce from "immer";
import PropTypes from 'prop-types';

class RadioButton extends Component {
  constructor(props){
    super();

    this.state = {
      value: props.value
    }
  }

  onChange = (e) => {
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
          <input
            type="radio"
            id={this.props.formId}
            name={this.props.name}
            checked={this.state.value}
            value={this.state.value}
            title={this.props.title}
          />

          <label htmlFor={this.props.formId}>
            <span>{this.props.label}</span>
            {
              this.state.value
              ? <span style={this.checkedStyle}>[선택]</span>
              : <span>[해제]</span>
            }
          </label>
      </Fragment>
    )
  }
}

// RadioButton.defaultProps = {
//   key: 'value'
// }
//
// RadioButton.propTypes = {
//   key: PropTypes.string.isRequired
// }

export default RadioButton;
