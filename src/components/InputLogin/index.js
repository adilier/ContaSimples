import React, { Component } from 'react';
import './styles.css'

export default class InputLogin extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
          <input type={this.props.type} placeholder={this.props.placeholder} className="input-login"/>
        );
    }
}
