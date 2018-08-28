import React, { Component } from 'react';
import {
    Route,
    HashRouter
} from "react-router-dom";
import Article from './Components/article';
import Body from './Components/body';
import Footer from './Components/footer';
import Seed from './seed.js';
import './App.css';
import ProjectPage from "./ProjectPage.js";

class App extends Component {
    constructor(){
        super();
        this.state = {
            footers: []
        }
    }
    componentWillMount() {
        this.setState({ footers: Seed.footers });
    }

    render() {
        return (
            <HashRouter>
            <div className="App">
                <Route exact path="/" component={Body}/>
                <Route exact path="/article/:articleName" component={Article}/>
                <Route exact path="/article" component={ProjectPage}/>
                <Footer footer={this.state.footers}/>
            </div>
            </HashRouter>
        );
    }
}

export default App;
