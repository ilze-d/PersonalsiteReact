import React, { Component } from 'react';
import './twoColumnSection.css';

class TwoColumnSection extends Component  {
    render() {
        return (
            <div className="TwoColumnSection">
                <div className="TwoColumnSection__text">
                <h2>Proffesional background</h2>
                <p>5 years of experience in Front End WEB development. I worked on many projects for e-commerce, corporate sites, web applications. Familiar with responsive design concepts, UX/UI design basics, accessibility basics. I am a fast learner, good team player and do my best in picking up new technologies, best practices, participating in hackathons and developer communities and sharing my knowalage with others.
                </p>
                </div>
                <div className="TwoColumnSection__links">
                    <a href="#">Facebook</a>
                    <a href="#">Linkedin</a>
                </div>
            </div>
        );
    }
}

export default TwoColumnSection;
