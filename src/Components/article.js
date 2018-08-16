import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectArticle extends Component  {
    render() {
        return (
            <section className="Article Body content">
                <h2>article</h2>
                <p>sd fsdf sdf sdf sd fsd fsd fsd fds sdf sdfsdfsd</p>
                <Link to={"/"}>home</Link>
            </section>
        );
    }
}

export default ProjectArticle;
