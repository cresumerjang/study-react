import React, { Component } from 'react';

const Dumy = (props) => {
    return <div 
        onClick={()=>alert(props.name + '!!')}
        >
        hi {props.name}
    </div>;
}
export default Dumy;
