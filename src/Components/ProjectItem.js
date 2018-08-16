import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectItem extends Component  {
    render() {
        return (
            <section className="Project">
                <h2>{this.props.project.title}</h2>
                <p>{this.props.project.body}</p>
                <Link to={'/article'}>article</Link>
            </section>
        );
    }
}

export default ProjectItem;
