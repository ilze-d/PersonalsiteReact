import React, { Component } from 'react';
import './header.css';
import {Link} from "react-router-dom";

class Header extends Component  {
    render() {
        return (
            <div className="Header">
                <div className="content Header__grid">
                    <h1 className="Header__title">{this.props.header.title}</h1>
                    <p className="Header__subtitle">{this.props.header.body}</p>
                    {this.props.header.image ?  <img className="Header__image" alt='header img' height="50" width="50" src={this.props.header.image.src}/> : null}
                </div>
            </div>
        );
    }
}

export default Header;
