var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from '../../store/configureStore.jsx';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', ()=> {

    it('should exist', ()=> {
        expect(TodoList).toExist();
    })

    it('should render one todo component per each item', () => {
        var todos = [
            {id: 1, text: 'walk the dog', completed:false,
                    completedAt:undefined, createdAt:500},
            {id: 2, text: 'clearn yard', completed:false,
                    completedAt:undefined, createdAt:600},
            {id: 3, text: 'nothing', completed:false,
                    completedAt:undefined, createdAt:200},
            {id: 4, text: 'bleehhhh', completed:false,
                    completedAt:undefined, createdAt:100},
        ];

        var store = configure({  todos: todos });

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );

        var todoList = TestUtils
            .scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

        var todosComponents = TestUtils
            .scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);

    });

    it('should render empty message if no todos', () => {
        var todos = [];

        var todoList = TestUtils
            .renderIntoDocument(< TodoList todos={todos}/>);

        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);

    });
})