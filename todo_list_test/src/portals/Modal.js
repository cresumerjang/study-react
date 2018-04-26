import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

const $domModal = document.getElementById('modal');

class Modal extends Component {
    constructor (props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount () {
        $domModal.appendChild(this.el);
    }

    componentWillUnmount () {
        $domModal.removeChild(this.el);
    }

    render () {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

export default Modal;