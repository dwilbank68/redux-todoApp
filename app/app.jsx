import React from 'react';
import ReactDOM from 'react-dom';
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

//import actions from 'actions';
var actions = require('actions');

var store = require('./store/configureStore').configure();

store.subscribe(()=>{
    console.log('state', store.getState());
})

store.dispatch(actions.addTodo('clean yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
// load foundation
$(document).foundation();


require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);

