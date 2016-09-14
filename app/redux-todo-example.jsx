var redux = require('redux');

console.log('starting redux example');

var defaultObj = {
    searchText:'',
    showCompleted:false,
    todos:[]
}

var reducer = (state = defaultObj, action)=>{
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT': return {
                                        ...state, searchText: action.searchText
                                    };
        default: return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(()=>{
    var state = store.getState();
    document.getElementById('app').innerHTML = state.searchText;
})

store.dispatch({
    type:'CHANGE_SEARCH_TEXT',
    searchText:'push dog in creek'
});

store.dispatch({
    type:'CHANGE_SEARCH_TEXT',
    searchText:'fish dog out of creek'
});
