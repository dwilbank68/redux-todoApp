import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'app/firebase/';

import Login from 'Login';
import TodoApp from 'TodoApp';

var redirectIfLoggedIn = (nextState, replace, next)=>{
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
}

var requireLogin = (nextState, replace, next)=>{
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
}

export default (
    <Router history={hashHistory}>
        <Route  path="/">
            <IndexRoute component={Login}
                        onEnter={redirectIfLoggedIn}/>
            <Route path="todos"
                   component={TodoApp}
                   onEnter={requireLogin}/>
        </Route>
    </Router>
);