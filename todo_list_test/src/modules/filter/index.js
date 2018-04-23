import React, { Component, Fragment } from 'react';

class FilterCreator extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        // data:{
            filter:{
                name:{
                    text:'기본값'
                },
                altText: '대체텍스트',
                checked: false,

            }
        // }
    }

    static propTypes = {

    }

    updateValue = (event) => {
        console.log(this.input.value);
    }

    render(){

        return (
              <Fragment>
                  <p>{this.props.data.filterName}</p>
                  <ul>
                  {
                      this.props.data.filterItems.map( item => {
                          return (
                              <li>
                                  <input onChange={this.updateValue} ref={(input) => this.input = input} type={item.type} id={item.name} checked={item.status} alt={item.altText} />
                                  <label id={item.name} htmlFor={item.name}>{item.name}</label>
                              </li>
                          )
                      })
                  }
                  </ul>
              </Fragment>
        );
    }
}

export default FilterCreator;