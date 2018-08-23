import React, { Component } from 'react';
import Header from './header';
import Projects from './Projects';
import LoadMore from './loadMore';
import Seed from '../seed.js';

class Body extends Component  {    constructor(){
    super();
    this.state = {
        projects: [],
        header: [],
        visible: 2,
    }
}

    componentWillMount() {
        this.setState({
            projects: Seed.projects,
            header: Seed.header, visible:
            Seed.visible
        })
    }

    handleloadMore(visible) {
        this.setState({visible: visible});
    }

    render() {
        return (
            <div className="Body">
                <Header header={this.state.header}/>
                <section className="Article content">
                    <Projects projects={this.state.projects} visible={this.state.visible}/>
                    <LoadMore loadMore={this.handleloadMore.bind(this)} projects={this.state.projects}/>
                </section>
            </div>
        );
    }
}

export default Body;
