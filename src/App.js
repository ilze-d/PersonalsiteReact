import React, { Component } from 'react';
import {
    Route,
    HashRouter
} from "react-router-dom";
import Header from './Components/header';
import Article from './Components/article';
import Body from './Components/body';
import Footer from './Components/footer';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
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
                },
        })
    }

    render() {
        return (
            <HashRouter>
            <div className="App">
                <Header header={this.state.header}/>
                <Route exact path="/" component={Body}/>
                <Route path="/article" component={Article}/>
                <Footer footer={this.state.footers}/>
            </div>
            </HashRouter>
        );
    }
}

export default App;
