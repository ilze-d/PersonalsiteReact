import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './header';
import Seed from '../seed.js';

class ProjectArticle extends Component  {
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }

    componentWillMount() {
        this.setState({ articles: Seed.articles })
    }

    render() {
        var article = this.state.articles.find((element) => {
            return element.id === this.props.match.params.articleName;
        });

        return (
            <div className="Body">
                <Header header={article.header}/>
                <section className="Article content">
                    <h2>{article.header.title}</h2>
                    <p>{article.body}</p>
                    <Link to={"/"}>home</Link>
                </section>
            </div>
        );
    }
}

export default ProjectArticle;
