import React, { Component, Fragment } from 'react';

export default class ButtonToggleFilterList extends Component {
    render(){
        return(
            <Fragment>
                <button 
                    type="button" 
                    onClick={()=>this.props.toggleFilter(this.props.idx)}>
                    토글필터
                    </button>
            </Fragment>
        )
    }
}