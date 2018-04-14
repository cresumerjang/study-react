import React, { Component, Fragment } from 'react';
import produce from "immer";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { radioButton } from '../../actions/index';

class RadioButton extends Component {
  constructor(props){
    super();

    this.state = {
      activeValue: props.item.checked
    }
  }

  onChange = (e) => {
    const currentValue = e.target.value;
    // this.setState( produce( draftState => {
    //   draftState.activeValue = currentValue;
    // }));
    this.props.radioButton(this.state.activeValue);
  }

  checkedStyle = {
    color:'red'
  }

  render(){
    return (
      <Fragment>
        <input
          type="radio"
          id={this.props.item.formId}
          name={this.props.item.name}
          value={this.props.item.value}
          checked={this.props.activeValue}
          onChange={this.onChange}
        />

        <label htmlFor={this.props.item.formId}>
          <span>{this.props.item.label}</span>
          {
            (this.props.activeValue)
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
function mapStateToProps(state) {
  return {
    activeValue: state.activeValue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({radioButton: radioButton}, dispatch);
}

// export default RadioButton;
export default connect(mapStateToProps, mapDispatchToProps)(RadioButton);
