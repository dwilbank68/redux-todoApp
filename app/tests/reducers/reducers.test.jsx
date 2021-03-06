var expect = require("expect");
var df = require('deep-freeze-strict');

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

    describe('authReducer', () => {
        it('should store uid on LOGIN', () => {
            var action = {
                type: 'LOGIN',
                uid: 123456789
            };
            var res = reducers.authReducer(undefined, df(action));
            expect(res).toEqual({uid: action.uid});
        });
        it('should wipe auth on LOGOUT', () => {
            const action = { type: 'LOGOUT' };
            const authData = { uid:987654321 };
            var res = reducers.authReducer(df(authData), df(action));
            expect(res).toEqual({})
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
                todo: {
                    text:'Throw dog in the creek',
                    createdAt: 324524,
                    completed: false, completedAt:null
                }
            }
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should ADD_TODOS', () => {
            var todos = [
                {
                    id:111,
                    text:'Throw dog in pond',
                    createdAt:33000,
                    completed: false, completedAt: undefined,
                }
            ]
            var action = {
                type:'ADD_TODOS',
                todos
            }
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        it('should UPDATE_TODO', () => {
            var todos = [{
                id:456,
                text:'bleeghh',
                completed:false,
                createdAt: 9876987698,
                completedAt: undefined
            }];
            var updates = {
                completed:false,
                completedAt: null
            }
            var action = {
                type: 'UPDATE_TODO',
                id:todos[0].id,
                updates:updates
            }
            var res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });

        it('should wipe todos on LOGOUT', () => {
            var todos = [{
                id:456,
                text:'bleeghh',
                completed:false,
                createdAt: 9876987698,
                completedAt: undefined
            }];
            const action = { type: 'LOGOUT' };
            var res = reducers.todosReducer(df(todos), df(action));
            expect(res).toEqual([]);
        });

    });

});