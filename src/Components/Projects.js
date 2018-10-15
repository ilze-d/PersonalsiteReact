import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './project.css';

class Projects extends Component  {
    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.slice(0, this.props.visible).map(project => {
                return (
                    <ProjectItem key={project.id} project={project} />
                );
            });
        }

        return (
            <div className="Projects content">
                {projectItems}
            </div>
        );
    }
}

export default Projects;
