import React, { Component, Fragment } from 'react';

class FilterCreator extends Component {
    constructor(props) {
        super(props);
        // this.filterBox = React.createRef();
    }

    state = {
        checked: this.props.data.status
    }

    updateValue = (event) =>{
    
        // console.log('state',this.state.checked)
        // console.log('event',event.target.checked)
        this.setState({
            checked: !this.state.checked
        })
    }

    componentDidMount(){
        // console.log('update',this.state.checked)
        // console.log('ref',this.input)
        // console.log('reate',this.filterBox.current)
    }

    componentDidUpdate(){
        // console.log(this.state.checked)
    }

    createFilter = (item) => {
        let filter;

        switch(item.type){
            case 'checkbox':
                filter = <input
                    type="checkbox"
                    onChange={this.updateValue}
                    ref={(input) => this.input = input}
                    id={item.name}
                    checked={this.state.checked}
                    alt={item.altText}
                />
                break;
            case 'radio':
                filter = <input
                    type="radio"
                    onChange={this.updateValue}
                    ref={(input) => this.input = input}
                    id={item.name}
                    checked={this.state.checked}
                    alt={item.altText}
                />
                break;
        }

        return filter;
    }

    render(){
        const item = this.props.data;

        return(
            <li>
                {this.createFilter(item)}
                <label id={item.name} htmlFor={item.name}>{item.name}</label>
            </li>
        )
    }
}

export default FilterCreator;