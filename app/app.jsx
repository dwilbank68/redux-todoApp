import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
var {Provider} = require('react-redux');

import * as actions from 'actions';
var store = require('./store/configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';


firebase
    .auth()
    .onAuthStateChanged((user)=>{
        if (user) {
            hashHistory.push('/todos');
        } else {
            hashHistory.push('/');
        }
    })

store.dispatch(actions.startAddTodos());

// load foundation
$(document).foundation();


require('style!css!sass!applicationStyles');



ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);