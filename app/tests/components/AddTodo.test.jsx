var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import AddTodo from 'AddTodo';
import Todo from 'Todo';

describe('AddTodo', ()=> {
    
    it('should exist', ()=> {
        expect(AddTodo).toExist();
    })

    it('should call onAddTodo if valid seconds entered', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils
            .renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));
        todoForm.refs.task.value = 'do this test';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('do this test');
    });

    it('should not call onAddTodo if no task entered', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils
            .renderIntoDocument(
                <AddTodo onAddTodo={spy}/>
            );
        var $el = $(ReactDOM.findDOMNode(todoForm));
        todoForm.refs.task.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });




})