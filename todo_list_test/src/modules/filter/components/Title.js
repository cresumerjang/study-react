import React, { Component, Fragment } from 'react';

export default class Title extends Component {
    render(){
        if( !this.props.data.filterName ) return null;
        
        return(
            <Fragment>
                <p className="filter--title">{this.props.data.filterName}</p>
            </Fragment>
        )
    }
}