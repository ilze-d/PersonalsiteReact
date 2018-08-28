import React, { Component } from 'react';
import './twoColumnSection.css';
import LinkList from "./linkList";

class TwoColumnSection extends Component  {
    render() {
        let linkItems;
        if(this.props.introduction.links){
            linkItems = this.props.introduction.links.map(link => {
                return (
                    <LinkList link={link} />
                );
            });
        }

        return (
            <div className="TwoColumnSection">
                <div className="TwoColumnSection__text">
                <h2>{this.props.introduction.title}</h2>
                <p>{this.props.introduction.text}</p>
                </div>
                <div className="TwoColumnSection__links">
                    {linkItems}
                </div>
            </div>
        );
    }
}

export default TwoColumnSection;
