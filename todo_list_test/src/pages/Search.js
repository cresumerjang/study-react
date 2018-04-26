import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';

import FilterCreator from '../modules/filter/containers';
import Modal from '../portals/Modal';

class Search extends Component {
    constructor(props){
        super(props);
        console.log(this.props.buttonColor);
        if( !this.state.buttonColor ){
            this.state = {}
        }
    }

    static defaultProps = {
        buttonColor:'orange'
    }

    static propTypes = {

    }

    callItems = () => {
        axios.get('http://reduxblog.herokuapp.com/api/posts?key=123', {
            params: {
                key:123
            }
        })
        .then((res) => {
          // this.setState({ videos: res.data.items });
          console.log(res)
          $(this.button).css({'background':'green'});
        });
        // http://reduxblog.herokuapp.com/api/posts?key=123
    }

    render() {
        return (
            <Fragment>
                <button style={{background:this.props.buttonColor}} type="button" onClick={this.callItems} ref={(button) => this.button = button}>Call Items</button>
                <div className="region--left">
                    <FilterCreator/>
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