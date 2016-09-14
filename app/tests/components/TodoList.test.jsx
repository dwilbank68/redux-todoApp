var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', ()=> {
    
    it('should exist', ()=> {
        expect(TodoList).toExist();
    })
    
    it('should render one todo component per each item', () => {
        var todos = [
            {id: 1, text: 'walk the dog'},
            {id: 2, text: 'clearn yard'},
            {id: 3, text: 'nothing'},
            {id: 4, text: 'bleehhhh'},
        ];

        var todoList = TestUtils
            .renderIntoDocument(< TodoList todos={todos}/>);

        var todosComponents = TestUtils
            .scryRenderedComponentsWithType(todoList, Todo);

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