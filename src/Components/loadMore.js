import React, { Component } from 'react';

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
                    <button onClick={this.handlesLoadMore.bind(this)}>Load more</button>
                }
            </div>
        );
    }
}

export default LoadMore;
