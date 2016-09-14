var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import TodoSearch from 'TodoSearch';

describe('TodoSearch', ()=> {
    
    it('should exist', ()=> {
        expect(TodoSearch).toExist();
    })

    it('should call onSearch with input text', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(
                                        <TodoSearch onSearch={spy}/>
                                );
        todoSearch.refs.searchText.value = 'do this test';
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false, 'do this test');
    });

    it('should call onSearch with checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(
                                    <TodoSearch onSearch={spy}/>
                                );
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true,'');
    });

})