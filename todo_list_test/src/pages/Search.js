import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FilterCreator from '../modules/filter/containers';

class Search extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        
    }

    static propTypes = {

    }

    render() {
        return (
            <Fragment>
                <div className="region--left">
                    <FilterCreator/>
                </div>
                <div className="region--right">

                </div>
            </Fragment>
        )
    }
}

export default Search;