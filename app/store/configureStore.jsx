var redux = require("redux");
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/reducers');

export var configure = ()=>{
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    var store = redux.createStore(
        reducer,
        redux.compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}
