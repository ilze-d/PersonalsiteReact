import React, { Component } from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import './breadcrumbs.css';
import Breadcrumbs  from 'react-router-dynamic-breadcrumbs';

const routes = {
    '/': 'Home',
    '/article': 'Projects',
    '/users': 'Users',
    '/users/:id/info': 'User Info',
    '/users/:id/posts/:p_id': 'Post :p_id by :id',
}

class Breadcrumb extends Component {
    render() {
        return (
            <div className="Breadcrumbs">
            <Breadcrumbs
                WrapperComponent={(props) => <div className="Breadcrumbs__container" >{props.children}</div>}
                ActiveLinkComponent={(props) => <span className="active" >{props.children}</span>}
                LinkComponent={(props) => <span>{props.children}</span>} // Don't create link tag or <Link />. Component will wrapp props.children with <Link />
                mappedRoutes={routes} />
            </div>
        );
    }
}
export default Breadcrumb;
