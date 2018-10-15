import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './project.css';

class ProjectItem extends Component  {
    render() {
        return (
            <section className="Project">
                <img className="Project__image" alt={this.props.project.img.alt} height="100" width="100" src={this.props.project.img.src}/>
                <div className="Project__details">
                    <h3 className="Project__title">{this.props.project.title}</h3>
                    <h4 className="Project__subTitle">{this.props.project.subTitle}</h4>
                    <p>{this.props.project.body.text}</p>
                    <p>{this.props.project.body.techStack}<br/>
                    {this.props.project.body.methodologies}</p>
                    {this.props.project.link ? <Link to={this.props.project.link.url}>{this.props.project.link.label}</Link> : null}
                </div>
            </section>
        );
    }
}

export default ProjectItem;
