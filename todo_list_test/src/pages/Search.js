import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import FilterCreator from '../modules/filter/';

class Search extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        filterList: [
            {
                filterName: '브랜드',
                filterItems: [
                    { name: '나이키', type: 'checkbox', status: false },
                    { name: '아디다스', type: 'checkbox', status: false }
                ]
            },
            {
                filterName: '카테고리',
                filterItems: [
                    { name: '스포츠', type: 'checkbox', status: false }
                ]
            }
        ]
    }

    static propTypes = {

    }

    render() {
        const filterList = this.props.filterList;
        const filterBox = filterList.map( filter => {
                return <FilterCreator data={filter}/>
            });

        return (
            <Fragment>
                <div className="region--left">
                    { filterBox ? filterBox : null }
                </div>
                <div className="region--right">

                </div>
            </Fragment>
        )
    }
}

export default Search;