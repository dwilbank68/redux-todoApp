import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({

    componentDidUpdate(prevProps, prevState, prevContext) {
        TodoAPI.setTodos(this.state.todos);
    },

    getInitialState() {
        return {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        };
    },

    handleAddTodo(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });

    },

    handleSearch(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });

    },



    render() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">

                    <div className="columns small-11 medium-6 large-5 small-centered">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default TodoApp;