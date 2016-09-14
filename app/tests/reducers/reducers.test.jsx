var expect = require("expect");
var df = require('deep-freeze-strict'); // 1

var reducers = require("reducers");

describe('Reducers', () => {

    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dilly'
            };
            var res = reducers.searchTextReducer(df(''), df(action))
            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Throw dog in the creek'
            }
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should toggle todo', () => {
            var todos = [{
                id:456,
                text:'bleeghh',
                completed:false,
                createdAt: 9876987698,
                completedAt: undefined
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id:456
            }
            var res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeGreaterThan(1);
        });
    });

});

// 1 - wraps all your input variables to ensure they do not change.
//      Because reducers should be pure functions.