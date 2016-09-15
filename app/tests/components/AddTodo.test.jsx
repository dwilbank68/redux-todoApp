var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {AddTodo} from 'AddTodo';
import Todo from 'Todo';

describe('AddTodo', ()=> {
    
    it('should exist', ()=> {
        expect(AddTodo).toExist();
    })

    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = 'steal car';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        }
        var spy = expect.createSpy();
        var addTodo = TestUtils
                            .renderIntoDocument(
                                <AddTodo dispatch={spy}/>
                            );
        var $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.task.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils
            .renderIntoDocument(
                <AddTodo dispatch={spy}/>
            );
        var $el = $(ReactDOM.findDOMNode(todoForm));
        todoForm.refs.task.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });

})