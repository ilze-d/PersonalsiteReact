import React, { Component } from 'react';
import Project from './project.css';

class ProjectItem extends Component  {
    render() {
        return (
            <section className="Project">
                <h2>{this.props.project.title}</h2>
                <p>{this.props.project.body}</p>
            </section>
        );
    }
}

export default ProjectItem;
