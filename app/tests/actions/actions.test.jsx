var expect = require("expect");
var actions = require("actions");

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
            text: 'Throw dog in pond'
        };
        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });

    it('should toggle show completed', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });

    it('should toggle todo', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 45
        };
        var res = actions.toggleTodo(45);
        expect(res).toEqual(action);
    });
});