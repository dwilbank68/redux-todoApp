var redux = require('redux');

console.log('starting redux example');

var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(()=>{
    var state = store.getState();
    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'loading...';
    } else if (state.map.url){
        document.getElementById('app').innerHTML = '<a target="_blank" href = "' +state.map.url+ '" >View Your Location</a>'
    }
})

console.log('currentState', store.getState());

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Pedro'));
store.dispatch(actions.addMovie('Pedro eats a bug', 'Comedy'));
store.dispatch(actions.addMovie('Silly Kitty', 'Drama'));
store.dispatch(actions.removeMovie(2));

console.log('currentState', store.getState());
