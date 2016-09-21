var expect = require("expect");
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase';

var actions = require("actions");

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Banana Polipsus'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                text: 'Throw dog in pond',
                id: 34634,
                completed: false,
                createdAt: 34634346
            }
        };
        var res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    });



    it('should generate add todos action obj', () => {
        var todos = [
            {
                id: 111,
                text: 'Throw dog in pond',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }
        ]
        var action = {
            type: 'ADD_TODOS',
            todos: todos
        };
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });

    it('should toggle show completed', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });

    it('should generate UPDATE_TODO action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 45,
            updates: {completed: false}
        };
        var res = actions.updateTodo(
            action.id,
            action.updates
        );
        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        var testTodoRef;
        var uid;
        var todosRef;

        beforeEach((done)=> {
            var token = process.env.GITHUB_ACCESS_TOKEN;
            console.log('token', token);
            console.log('process.env', process.env);

            var credential = firebase
                                .auth
                                .GithubAuthProvider
                                .credential(token);

            firebase
                .auth()
                .signInWithCredential(credential)
                .then((user)=>{
                    uid = user.uid;
                    todosRef = firebaseRef
                                    .child(`users/${uid}/todos`);
                    return todosRef.remove()
                })
                .then(()=>{
                    testTodoRef = todosRef.push();
                    return testTodoRef.set({
                        text: 'task 234',
                        completed: false,
                        createdAt: 463463463
                    })
                })
                .then(()=> done())
                .catch(done);
        });

        afterEach((done)=> {
            todosRef
                .remove()
                .then(()=> done());
        })

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startToggleTodo(testTodoRef.key, true);
            store.dispatch(action)
                    .then(
                        ()=>{
                            const mockActions = store.getActions();
                            expect(mockActions[0]).toInclude({
                                type: 'UPDATE_TODO',
                                id: testTodoRef.key,
                            });
                            expect(mockActions[0].updates).toInclude({
                                completed: true
                            });
                            expect(mockActions[0].updates.completedAt).toExist();
                            done();
                        },
                        done
                    );
        });

        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({auth: {uid}});            const action = actions.startAddTodos();
            store.dispatch(action)
                    .then(
                        ()=>{
                            const mockActions = store.getActions();
                            expect(mockActions[0].type).toEqual('ADD_TODOS');
                            expect(mockActions[0].todos.length).toEqual(1);
                            expect(mockActions[0].todos[0].text).toEqual('task 234');
                            done();
                        },
                        done
                    )
        });

        it('should create todo and dispatch ADD_TODO', (done) => {
            const store = createMockStore({auth: {uid}});
            const todoText = "todo4";
            store.dispatch(actions.startAddTodo(todoText))
                .then(()=> {
                    const actions = store.getActions();
                    expect(actions[0]).toInclude({
                        type: 'ADD_TODO'
                    });
                    expect(actions[0].todo).toInclude({
                        text: todoText
                    });
                    done();
                })
                .catch(done);
        });

    });

    describe('Login and Logout Actions', () => {
        it('should generate LOGIN action', () => {
            const action = {
                type: 'LOGIN',
                uid: 123456789
            };
            const res = actions.login( action.uid );
            expect(res).toEqual(action);
        });
        it('should generate LOGOUT action', () => {
            var action = {
                type: 'LOGOUT'
            }
            var res = actions.logout();
            expect(res).toEqual(action);
        });
    });

});