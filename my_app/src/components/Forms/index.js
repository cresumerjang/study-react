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
          this.props.radio.map((radio) => {
            
            return(
              <RadioButton
                name={radio.name}
                formId={radio.formId}
                value={radio.value}
                label={radio.label}
                />
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
        value: true,
        label: '남자'
      },
      {
        name: 'sex',
        formId: 'female',
        value: false,
        label: '여자'
      }
    ]
};

export default Forms;
