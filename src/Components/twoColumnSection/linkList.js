import React, { Component } from 'react';
import './twoColumnSection.css';

class LinkList extends Component  {
    render() {
        return (
            <a href={this.props.link.href}>{this.props.link.label}</a>
        );
    }
}

export default LinkList;
