import React, { Component } from 'react';
import Checkbox from './checkbox';
import RadioButton from './radio';

class Forms extends Component {
  constructor(){
    super();

  }

  render(){
    return (
      <form action="" method="">
        <Checkbox name="상품옵션1" formId="1" value={true} label="브랜드">
        // {this.props.children}
        //   <label htmlFor="1">상품옵션</label>
        </Checkbox>
        <Checkbox name="상품옵션2" formId="2" value={false} label="사이즈"/>
        {
          this.props.radio.map( item => {
            return (
              <RadioButton item={item}/>
            )
          })
        }
      </form>
    )
  }
}

Forms.defaultProps = {
    radio: [
      {
        name: 'sex',
        formId: 'male',
        value: 'male',
        label: '남자',
        checked: true
      },
      {
        name: 'sex',
        formId: 'female',
        value: 'female',
        label: '여자',
        checked: false
      }
    ]
};

export default Forms;
