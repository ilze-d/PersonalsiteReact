import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Components/header/header';
import Projects from './Components/Projects';
import LoadMore from './Components/loadMore';
import Seed from './seed.js';
import Breadcrumbs from './Components/breadcrumbs/breadcrumbs.js'

class ProjectPage extends Component  {    constructor(){
    super();
    this.state = {
        projects: [],
        projectPageHeader: [],
        visible: 2,
    }
}

    componentWillMount() {
        this.setState({
            projects: Seed.projects,
            projectPageHeader: Seed.projectPageHeader,
            visible: Seed.visible
        })
    }

    handleloadMore(visible) {
        this.setState({visible: visible});
    }

    render() {
        return (
            <div className="Body">
                <Header header={this.state.projectPageHeader}/>
                <Breadcrumbs/>
                <section className="Article content">
                    <Projects projects={this.state.projects} visible={this.state.visible}/>
                    <LoadMore loadMore={this.handleloadMore.bind(this)} projects={this.state.projects}/>
                </section>
            </div>
        );
    }
}

export default ProjectPage;
