import React, { Component } from 'react';
import './header.css';

class Header extends Component  {
    render() {
        return (
            <div className="Header">
                <div className="content">
                    <h1>{this.props.header.title}</h1>
                    <p>{this.props.header.body}</p>
                </div>
            </div>
        );
    }
}

export default Header;
