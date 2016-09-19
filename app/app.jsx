import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
var {Provider} = require('react-redux');

import Login from 'Login';
import TodoApp from 'TodoApp';
import * as actions from 'actions';
var store = require('./store/configureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// load foundation
$(document).foundation();


require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRoute  component={Login}/>
                <Route path="todos" component={TodoApp} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);