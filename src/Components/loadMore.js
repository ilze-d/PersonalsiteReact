import React, { Component } from 'react';
import './loadMoreButton.css';

class LoadMore extends Component  {
    constructor() {
        super();
        this.state = {
            visible: 2,
        }
    }

    handlesLoadMore() {
        this.setState({visible: this.state.visible + 2},
        function() {
            this.props.loadMore(this.state.visible);
        });
    }

    render() {
        return (
            <div className="content">
                {this.state.visible < this.props.projects.length &&
                    <button className="LoadMoreButton" onClick={this.handlesLoadMore.bind(this)}>Load more</button>
                }
            </div>
        );
    }
}

export default LoadMore;
