import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectItem extends Component  {
    render() {
        return (
            <section className="Project">
                <h2>{this.props.project.title}</h2>
                <p>{this.props.project.body}</p>
                {this.props.project.link ? <Link to={this.props.project.link.url}>{this.props.project.link.label}</Link> : null}
            </section>
        );
    }
}

export default ProjectItem;
