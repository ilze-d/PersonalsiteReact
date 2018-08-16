import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Projects from './Projects';
import uuid from "uuid";
import LoadMore from './loadMore';


class Body extends Component  {    constructor(){
    super();
    this.state = {
        projects: [],
    }
}

    componentWillMount() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Volvo Cars Loged in experience',
                    body: 'Building with backbone',
                },
                {
                    id: uuid.v4(),
                    title: 'First React and UI/UX project',
                    body: 'My experimental project',
                },
                {
                    id: uuid.v4(),
                    title: 'Rewe photo',
                    body: 'Building Reve photo site with picanova',
                },
                {
                    id: uuid.v4(),
                    title: 'VISMA SMB marketing',
                    body: 'Building landing pages',
                },
                {
                    id: uuid.v4(),
                    title: 'Rewe photo',
                    body: 'Building Reve photo site with picanova',
                    cta: 'more',
                },
                {
                    id: uuid.v4(),
                    title: 'VISMA SMB marketing',
                    body: 'Building landing pages',
                }
            ],
            visible: 2,
        })
    }

    handleloadMore(visible) {
        this.setState({visible: visible});
    }

    render() {
        return (
            <div className="Body">
                <section className="Article content">
                    <Projects projects={this.state.projects} visible={this.state.visible}/>
                    <LoadMore loadMore={this.handleloadMore.bind(this)} projects={this.state.projects}/>
                </section>
            </div>
        );
    }
}

export default Body;
