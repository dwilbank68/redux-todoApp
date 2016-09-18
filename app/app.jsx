import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');

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
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);

