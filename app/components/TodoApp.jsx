import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({

    render() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">

                    <div className="columns small-11 medium-6 large-5 small-centered">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

export default TodoApp;