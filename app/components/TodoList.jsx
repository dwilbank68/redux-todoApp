import React from 'react';
var {connect} = require('react-redux');
import Todo from 'Todo';


const TodoList = React.createClass({
    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        );
    },

    renderTodos(){
        var {todos} = this.props;

        if (todos.length === 0) {
            return (
                <p className="container__message">
                    Nothing To Do
                </p>
            )
        }

        return todos.map((todo)=>{
            return (
                <Todo key={todo.id}  {...todo} />
            );
        });
    }

});

module.exports = connect(
    (state)=>{
        return {  todos: state.todos  }
    }
)(TodoList);
