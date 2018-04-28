import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';

import FilterCreator from '../modules/filter/containers';
import Modal from '../portals/Modal';
import ErrorBoundary from '../modules/filter/components/ErrorBoundary';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonColor:this.props.buttonColor
        }
        // if( !this.state.buttonColor ){
        //     this.state.buttonColor = this.props.buttonColor;
        // }
    }

    static defaultProps = {
        buttonColor:'orange'
    }

    static propTypes = {

    }

    list = {};

    callItems = () => {
        axios.get('http://reduxblog.herokuapp.com/api/posts?key=123', {
            params: {
                key:123
            }
        })
        .then((res) => {
            this.state.list = res.data.map((item)=>{
                return <li>{item.id}</li>
            })
          this.setState({
              buttonColor:'green'
          })
        });

        
        // try {
        //     throw new Error('BOOM');
        // } catch (error) {
        //     console.log('====================================');
        //     console.log('error',error);
        //     this.setState({
        //         hasError: true
        //     });
        // }
        // http://reduxblog.herokuapp.com/api/posts?key=123
    }


    

    render() {
        return (
            <Fragment>
            
                { 
                    !this.state.hasError 
                    ?
                        (<p style={{color:'green'}}>에러없음</p>)
                    :
                        (<p style={{color:'red'}}>에러!!</p>)
                }
                
                    <button style={{background:this.state.buttonColor}} type="button" onClick={this.callItems} ref={(button) => this.button = button}>Call Items</button>
                
                <ul>
                    {this.state.list}
                </ul>
                <div className="region--left">
                    <ErrorBoundary>
                        <FilterCreator/>
                    </ErrorBoundary>
                </div>
                <div className="region--right">
                    <Modal>
                        <div id="Modal">모달이닷!</div>
                    </Modal>
                </div>
                
            </Fragment>
        )
    }
}

export default Search;