var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';

import {Todo} from 'Todo';

describe('Todo', ()=> {
    it('should exist', ()=> {
        expect(Todo).toExist();
    })

    it('should dispatch UPDATE_TODO action with id on click', () => {

        var todoData = {
            id:119,
            text:'Test features sfsdf',
            completed:true
        }

        var action = actions.startToggleTodo(
            todoData.id, !todoData.completed
        );

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(
            <Todo {...todoData} dispatch={spy}/>
        );
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el.find('input')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
})