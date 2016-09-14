var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import Todo from 'Todo';

describe('Todo', ()=> {
    it('should exist', ()=> {
        expect(Todo).toExist();
    })

    it('should call onToggle prop with id on click', () => {

        var todoData = {
            id:119,
            text:'Test features sfsdf',
            completed:true
        }

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(
            <Todo {...todoData} onToggle={spy}/>
        );
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el.find('input')[0]);
        expect(spy).toHaveBeenCalledWith(119);

    });
})