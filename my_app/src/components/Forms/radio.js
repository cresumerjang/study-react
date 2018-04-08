import React, { Component, Fragment } from 'react';
import produce from "immer";
import PropTypes from 'prop-types';

class RadioButton extends Component {
  constructor(props){
    super();

    this.state = {
      items: props.formItems,
      value: props.formItems[0].value
    }
  }

  onChange = (e) => {
    const currentValue = e.target.value;

    this.setState( produce( draftState => {
      draftState.value = currentValue;
    }));
  }

  checkedStyle = {
    color:'red'
  }

  render(){
    const radioItems = this.state.items.map( radio => {
      return (
        <Fragment>
          <input
            type="radio"
            id={radio.formId}
            name={radio.name}
            checked={radio.value === this.state.value}
            value={radio.formId}
            title={radio.title}
            onChange={this.onChange}
          />

          <label htmlFor={radio.formId}>
            <span>{radio.label}</span>
            {
              radio.value === this.state.value
              ? <span style={this.checkedStyle}>[선택]</span>
              : <span>[해제]</span>
            }
          </label>
      </Fragment>
      );
    });

    return (
      <Fragment>
          {radioItems}
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
