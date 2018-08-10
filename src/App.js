import React, { Component } from 'react';
import uuid from 'uuid';
import Header from './Components/header';
import Projects from './Components/Projects';
import LoadMore from './Components/loadMore';
import Footer from './Components/footer';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            header: [],
            projects: [],
            footers: [
                {
                    body: 'created and designed by ilze',
                    repository: {
                        link: 'repository',
                        url: 'git.com',
                    }
                }
            ]
        }
    }

    componentWillMount() {
        this.setState({
            header:
                {
                    title: 'Ilze Dombrovska',
                    body: 'Front-end web developer',
                    image: '',
                },
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
            <div className="App">
                <Header header={this.state.header}/>
                <div className="Body">
                    <Projects projects={this.state.projects} visible={this.state.visible}/>
                    <LoadMore loadMore={this.handleloadMore.bind(this)} projects={this.state.projects}/>
                </div>
                <Footer footer={this.state.footers}/>
            </div>
        );
    }
}

export default App;
