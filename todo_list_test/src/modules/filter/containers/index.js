import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setFilterStatus } from '../actionAndReducers/filter';
import FilterItem from '../components/FilterItem';
import Title from '../components/Title';
import ButtonToggleFilterList from '../components/Button--toggle_filter_list';
import ButtonSpreadFilterList from '../components/Button--spread_filter_list';

class FilterCreator extends Component {
    constructor(props){
        super(props);
        this.filterBox = React.createRef();
        // this.state = {
        //     isActive: true
        // }
        
    }

    componentDidMount(){

    }

    componentDidUpdate(){
        
    }

    toggleFilterList = (idx) => {
        console.log(idx);
        this.props.setFilterStatus({
            targetIndex:idx, 
            targetIsActive:!this.props.filterList[idx].isActive
        });
        // this.props.filterList[idx].isActive = !this.props.filterList[idx].isActive
    }

    render(){
        const hideListStyle = {
            transition:'all 1s ease',
            height:'0',
            overflow:'hidden'
            // display: 'none'
        }
        return (
              <Fragment>
                    {this.props.filterList.map((filter, idx)=>{
                        return (
                            <div className="testClass" ref={this.filterBox}>
                                <Title data={filter}/>                                
                                <ButtonToggleFilterList toggleFilter={this.toggleFilterList} idx={idx}/>
                                <ul ref={(filterList) => this.filterList = filterList} style={!filter.isActive ? hideListStyle : null}>
                                    {
                                        filter.filterItems.map( item => {
                                            return (<FilterItem data={item}/>)
                                        })
                                    }
                                </ul>
                                <ButtonSpreadFilterList/>
                                <hr/>
                            </div>
                        )
                    })}
              </Fragment>
        );
    }
}

const mapStateToProps = state => {
    console.log('====================================');
    console.dir(state);
    console.log('====================================');
    return {
        filterList: state.filterList
    };
  }

const matDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setFilterStatus
    }, dispatch);
  }
// export default FilterCreator;
export default connect(mapStateToProps, matDispatchToProps)(FilterCreator);